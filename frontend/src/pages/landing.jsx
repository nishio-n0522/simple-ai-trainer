import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { redirectToAuth } from "supertokens-auth-react";

import { ReactComponent as Logo } from "../assets/images/simple-ai-trainer_logo.svg";
import SimpleAiTrainerLogo from "../assets/images/simple-ai-trainer_logo.png";
import { grey } from "../theme/palette";
import { GitHub } from "@mui/icons-material";
import { typography } from "../theme/typography";

import { ReactComponent as ArrowRightSvg } from "../assets/images/landing_page/arrow-right.svg";
import UserFirstStepImage from "../assets/images/landing_page/user_first_step.png";
import UserSecondStepImage from "../assets/images/landing_page/user_second_step.png";
import UserThirdStepImage from "../assets/images/landing_page/user_third_step.png";
import UserFinalStepImage from "../assets/images/landing_page/user_final_step.png";
import DeveloperFirstStepImage from "../assets/images/landing_page/developer_first_step.png";
import DeveloperLastStepImage from "../assets/images/landing_page/developer_last_step.png";

export function LandingPage() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title> landing | simple-ai-trainer </title>
      </Helmet>
      <Stack
        width="100%"
        height={{ xs: 470, md: 520 }}
        direction="column"
        alignItems="center"
        justifyContent="flex-start"
        sx={{
          background: "linear-gradient(#000000, #414141)",
        }}
      >
        <Stack
          width="100%"
          height="80px"
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          px={3}
          mb={10}
          boxSizing="border-box"
        >
          <Button
            variant="text"
            color="primary"
            sx={{
              mx: 1,
              fontFamily: "Roboto",
              fontSize: typography.h6,
            }}
            onClick={() => navigate("/dashboard/home")}
          >
            Sign in
          </Button>
          <Button
            variant="outlined"
            color="primary"
            sx={{
              mx: 1,
              fontFamily: "Roboto",
              fontSize: typography.h6,
            }}
            onClick={() => redirectToAuth({ show: "signup" })}
          >
            Sign up
          </Button>
          <IconButton
            color="primary"
            sx={{
              ml: 3,
            }}
          >
            <GitHub sx={{ width: "48px", height: "48px" }} />
          </IconButton>
        </Stack>
        <img
          src={SimpleAiTrainerLogo}
          style={{ height: "30%", objectFit: "contain" }}
        />
        <Typography
          color={grey[300]}
          fontFamily="BIZUDPGothic"
          fontWeight={400}
          mt={2}
          mb={3.5}
          sx={{
            fontSize: {
              xs: typography.h3.fontSize,
              md: typography.h2.fontSize,
            },
          }}
        >
          Simple-ai-trainer
        </Typography>
        <Typography
          // variant={{ xs: "h4", md: "h1" }}
          // variant="h3"
          color={grey[300]}
          fontFamily="Roboto"
          fontWeight={400}
          my={1}
          sx={{
            maxWidth: { xs: 500, md: 700 },
            fontSize: {
              xs: typography.h4.fontSize,
              md: typography.h3.fontSize,
            },
            textAlign: "justify",
            fontWeight: 400,
          }}
        >
          Simple-ai-trainer is an open-source AI training platform that connects
          data analysts with data analysis users.
        </Typography>
      </Stack>
      <Stack
        width="100%"
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        gap={3}
        boxSizing="border-box"
        px={{
          xs: 2,
          md: 7,
          lg: 15,
          xl: 30,
        }}
        py={3}
      >
        <Box width="100%">
          <Typography
            // variant="h4"
            fontFamily="Roboto"
            fontWeight="bold"
            sx={{
              ml: { xs: 2, md: 4 },
              mt: 2,
              typography: { xs: "h6", md: "h5", lg: "h4" },
            }}
          >
            Two use cases of simple-ai-trainer
          </Typography>
          <Typography
            // variant="h5"
            fontFamily="Roboto"
            fontWeight="400"
            sx={{
              mx: 7,
              mt: 1,
              fontSize: {
                xs: typography.body2.fontSize,
                md: typography.body1.fontSize,
                lg: typography.h4.fontSize,
              },
              textAlign: "justify",
            }}
          >
            When developing and using AI concurrently within an organization,
            there are two use cases from the perspectives of AI users and
            developers. Simple-ai-trainer commits to these two use cases and
            provides a platform to seamlessly connect both.
          </Typography>
        </Box>
        <Box width="100%" bgcolor={grey[200]}>
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="baseline"
            sx={{ ml: { xs: 2, md: 4 }, mt: 2 }}
          >
            <Typography
              fontFamily="Roboto"
              fontWeight="bold"
              sx={{ typography: { xs: "h6", md: "h5", lg: "h4" } }}
            >
              For user
            </Typography>
            <Typography
              fontFamily="Roboto"
              color={grey[400]}
              sx={{
                ml: 2,
                typography: { xs: "h6", md: "h5", lg: "h4" },
              }}
            >
              Users only need to complete just four simple steps.
            </Typography>
          </Stack>

          <Grid
            container
            rowSpacing={1}
            sx={{ width: "100%", my: 1, p: 0, boxSizing: "border-box" }}
          >
            <Grid item xs={0.8} />
            <Grid
              item
              xs={2}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                boxSizing: "border-box",
              }}
            >
              <img
                src={UserFirstStepImage}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </Grid>
            <Grid
              item
              xs={0.8}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ArrowRightSvg width="100%" />
            </Grid>
            <Grid
              item
              xs={2}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                boxSizing: "border-box",
              }}
            >
              <img
                src={UserSecondStepImage}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </Grid>
            <Grid
              item
              xs={0.8}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ArrowRightSvg width="100%" />
            </Grid>
            <Grid
              item
              xs={2}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                boxSizing: "border-box",
              }}
            >
              <img
                src={UserThirdStepImage}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </Grid>
            <Grid
              item
              xs={0.8}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ArrowRightSvg width="100%" />
            </Grid>
            <Grid
              item
              xs={2}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                boxSizing: "border-box",
              }}
            >
              <img
                src={UserFinalStepImage}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </Grid>
            <Grid item xs={0.8} />
            <Grid item xs={0.8} />
            <Grid
              item
              xs={2}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                boxSizing: "border-box",
              }}
            >
              <Typography
                sx={{ typography: { xs: "body2", md: "h6", lg: "h5" } }}
              >
                Take photos
              </Typography>
            </Grid>
            <Grid item xs={0.8} />
            <Grid
              item
              xs={2}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                boxSizing: "border-box",
              }}
            >
              <Typography
                sx={{ typography: { xs: "body2", md: "h6", lg: "h5" } }}
              >
                Make dataset
              </Typography>
            </Grid>
            <Grid item xs={0.8} />
            <Grid
              item
              xs={2}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                boxSizing: "border-box",
              }}
            >
              <Typography
                sx={{ typography: { xs: "body2", md: "h6", lg: "h5" } }}
              >
                Train model
              </Typography>
            </Grid>
            <Grid item xs={0.8} />
            <Grid
              item
              xs={2}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                boxSizing: "border-box",
              }}
            >
              <Typography
                sx={{ typography: { xs: "body2", md: "h6", lg: "h5" } }}
              >
                Use model
              </Typography>
            </Grid>
            <Grid item xs={0.8} />
          </Grid>
        </Box>
        <Box width="100%" bgcolor={grey[200]}>
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="baseline"
            sx={{ ml: { xs: 2, md: 4 }, mt: 2 }}
          >
            <Typography
              fontFamily="Roboto"
              fontWeight="bold"
              sx={{ typography: { xs: "h6", md: "h5", lg: "h4" } }}
            >
              For developer
            </Typography>
            <Typography
              fontFamily="Roboto"
              color={grey[400]}
              sx={{
                ml: 2,
                typography: { xs: "h6", md: "h5", lg: "h4" },
              }}
            >
              Developers only need to complete just two simple steps.
            </Typography>
          </Stack>
          <Grid
            container
            rowSpacing={1}
            sx={{ width: "100%", my: 1, p: 0, boxSizing: "border-box" }}
          >
            <Grid item xs={0.8} />
            <Grid
              item
              xs={4.6}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                boxSizing: "border-box",
              }}
            >
              <img
                src={DeveloperFirstStepImage}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </Grid>
            <Grid
              item
              xs={0.8}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ArrowRightSvg width="100%" />
            </Grid>
            <Grid
              item
              xs={5}
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                boxSizing: "border-box",
              }}
            >
              <img
                src={DeveloperLastStepImage}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </Grid>
            <Grid item xs={0.8} />
            <Grid item xs={0.8} />
            <Grid
              item
              xs={4.6}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                boxSizing: "border-box",
              }}
            >
              <Typography
                sx={{ typography: { xs: "body2", md: "h6", lg: "h5" } }}
              >
                Create pretrained model
              </Typography>
            </Grid>
            <Grid item xs={0.8} />
            <Grid
              item
              xs={5}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                boxSizing: "border-box",
              }}
            >
              <Typography
                sx={{ typography: { xs: "body2", md: "h6", lg: "h5" } }}
              >
                Deploy model on simple-ai-trainer
              </Typography>
            </Grid>
            <Grid item xs={0.8} />
          </Grid>
        </Box>
      </Stack>
      <Stack
        width="100%"
        height={{ xs: "40px", md: "50px", lg: "60px" }}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          background: grey[600],
        }}
      >
        <Typography
          sx={{
            color: grey[300],
            fontFamily: "Roboto",
            fontWeight: 400,
            fontSize: typography.h6,
            typography: {
              xs: "caption",
              // xs: "subtitle2",
              md: "body2",
              lg: "body1",
            },
          }}
        >
          © 2024 nishio-n0522
        </Typography>
      </Stack>
    </>
  );
}
