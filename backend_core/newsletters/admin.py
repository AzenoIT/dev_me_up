from django.contrib import admin

from newsletters.models import Subscriber, Newsletter


class SubscriberAdmin(admin.ModelAdmin):
    fields = ('email', 'confirmed')
    list_display = ('email', 'confirmed')
    search_fields = ('email',)
    list_filter = ('email',)


admin.site.register(Subscriber, SubscriberAdmin)


class NewsletterAdmin(admin.ModelAdmin):
    fields = ('subject', 'contents')
    list_display = ('subject', 'contents')
    search_fields = ('subject',)
    list_filter = ('subject',)


admin.site.register(Newsletter, NewsletterAdmin)
