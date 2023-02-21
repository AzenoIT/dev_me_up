from django.contrib import admin

from backend_core.questions.models import Question


class QuestionAdmin(admin.ModelAdmin):
    fields = ('questions', 'answers', 'technologies')
    list_display = ('pk', 'questions', 'answers', 'technologies')
    search_fields = ('questions',)
    list_filter = ('questions', 'technologies')
    ordering = ('-creation_date',)


admin.site.register(Question)
