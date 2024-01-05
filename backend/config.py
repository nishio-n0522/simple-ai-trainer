from supertokens_python.recipe import emailpassword, session, dashboard
from supertokens_python import (
    InputAppInfo,
    SupertokensConfig,
)
from supertokens_python.recipe.emailpassword.interfaces import APIInterface, APIOptions, SignUpPostOkResult
from supertokens_python.recipe.emailpassword import InputFormField
from supertokens_python.recipe.emailpassword.types import FormField
from typing import List, Dict, Any


def override_email_password_apis(original_implementation: APIInterface):
    original_sign_up_post = original_implementation.sign_up_post
    
    async def sign_up_post(form_fields: List[FormField], tenant_id: str,
                           api_options: APIOptions,
                           user_context: Dict[str, Any]):
        # First we call the original implementation of signInPOST.
        response = await original_sign_up_post(form_fields, tenant_id, api_options, user_context)

        # Post sign up response, we check if it was successful
        if isinstance(response, SignUpPostOkResult):
            _ = response.user.user_id
            __ = response.user.email
            # TODO: use the input form fields values for custom logic

        return response
    
    original_implementation.sign_up_post = sign_up_post
    return original_implementation

supertokens_config=SupertokensConfig(
    connection_uri='http://localhost:3567',
    api_key='someKey'
)

app_info = InputAppInfo(
    app_name="Supertokens",
    api_domain="http://192.168.0.8:3001",
    website_domain="http://192.168.0.8:3000",
)

framework = "fastapi"

# recipeList contains all the modules that you want to
# use from SuperTokens. See the full list here: https://supertokens.com/docs/guides
recipe_list = [
    session.init(),
    emailpassword.init(
        sign_up_feature=emailpassword.InputSignUpFeature(form_fields=[InputFormField(id='name')]),
        # override=emailpassword.InputOverrideConfig(apis=override_email_password_apis)
    ),
    dashboard.init(api_key="simple-ai-trainer_dashboard")
]
