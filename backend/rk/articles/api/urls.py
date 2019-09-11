from django.urls import path,include

from .views import ReactFilterView

from .views import UserViewSet
from rest_framework.routers import DefaultRouter



router = DefaultRouter()
router.register('art', UserViewSet, base_name='user')



urlpatterns = [
    path('', include(router.urls)),
    path('filter/', ReactFilterView.as_view(), name='react'),

]


