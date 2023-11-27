import HomeIcon from "@mui/icons-material/Home";
import ModelTrainingIcon from "@mui/icons-material/ModelTraining";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import ScienceIcon from "@mui/icons-material/Science";

const navConfig = [
  {
    title: "home",
    path: "/",
    icon: <HomeIcon />,
  },
  {
    title: "dataset",
    path: "/dataset",
    icon: <PhotoLibraryIcon />,
  },
  {
    title: "model",
    path: "/model",
    icon: <ModelTrainingIcon />,
  },
];

export default navConfig;
