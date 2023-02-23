from django.contrib import admin

from newsletters.models import Subscriber, Newsletter

def send_newsletter(modeladmin, request, queryset):
    for newsletter in queryset:
        newsletter.send(request)

send_newsletter.short_description = "Send selected Newsletters to all subscribers"



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
    actions = [send_newsletter]


admin.site.register(Newsletter, NewsletterAdmin)
