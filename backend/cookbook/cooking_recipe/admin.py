from django.contrib import admin
from .models import Food, Category
from django import forms


# class AdvertisementAdminForm(forms.ModelForm):
#     text = forms.CharField(widget=CKEditorWidget())
#     class Meta:
#         model = Advertisement
#         fields = '__all__'
# class AdvertisementAdmin(admin.ModelAdmin):
#     form = AdvertisementAdminForm

class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id','name')
#     list_filter = ('commentUser', 'commentAdvertisement', 'dateCreation','commentStatus')
#     search_fields = ('commentStatus', 'dateCreation', 'text')
class FoodAdmin(admin.ModelAdmin):
    list_display = ('id','title', 'foodCategory')



admin.site.register(Food,FoodAdmin)
admin.site.register(Category,CategoryAdmin)