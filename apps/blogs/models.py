from django.db import models
from ckeditor.fields import RichTextField
from ckeditor_uploader.fields import RichTextUploadingField
# Create your models here.


def blog_directory_path(instance, filename):
    return 'blogs/{0}/{1}'.format(instance.slug.lower(), filename)


class Blog(models.Model):
    title = models.CharField(max_length=255)
    slug = models.SlugField()
    description = models.TextField()
    content = RichTextUploadingField()
    image = models.ImageField(upload_to=blog_directory_path)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return self.title

    class Meta:
        ordering = ['pk']
        verbose_name = 'Blog'
        verbose_name_plural = 'Blogs'
