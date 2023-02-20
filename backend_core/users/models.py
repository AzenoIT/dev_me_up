from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.translation import gettext_lazy as _

class CustomUser(AbstractUser):
    email = models.EmailField(_("email address"), unique=True)
    username = models.CharField( _("username"),
        max_length=100,
        unique=False,
        help_text=_(
            "Required. 100 characters or fewer."
        ),)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    def __str__ (self):
        return self.email
