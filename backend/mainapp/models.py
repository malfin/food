from django.contrib.auth.models import AbstractUser
from django.db import models
from django.core.validators import RegexValidator


class UserProfile(AbstractUser):
    phone_regex = RegexValidator(regex=r'^\+?1?\d{9,15}$',
                                 message="Телефон необходимо вводить в формате: '+700000000'. Допускается до 11 цифр!")

    first_name = models.CharField(verbose_name='Имя', max_length=150)
    last_name = models.CharField(verbose_name='Фамилия', max_length=150)
    patronymic = models.CharField(verbose_name='Отчество', max_length=150, blank=True)
    phone_number = models.CharField(verbose_name='Номер телефона', validators=[phone_regex], max_length=12)
    birth_day = models.DateField(verbose_name='Дата рождения', null=True, blank=True)
    email = models.EmailField('Email', blank=True)


class Slider(models.Model):
    image = models.ImageField(verbose_name='Изображение', upload_to='slider/%Y/%m/%d/')

    def __str__(self):
        return self.image.url

    class Meta:
        verbose_name = 'Слайдер'
        verbose_name_plural = 'Слайдер'


class Category(models.Model):
    name = models.CharField(verbose_name='Название категории', max_length=128)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Категория'
        verbose_name_plural = 'Категории'


class Products(models.Model):
    category = models.ForeignKey(Category, verbose_name='категория', on_delete=models.CASCADE)
    name = models.CharField(verbose_name='Название товара', max_length=128)
    image = models.ImageField(verbose_name='Изображение', upload_to='products/%Y/%m/%d/')
    desk = models.TextField(verbose_name='описание')
    price = models.DecimalField(verbose_name='Цена', max_digits=8, decimal_places=2)
    weight = models.IntegerField(verbose_name='масса/вес (гр)', blank=True, null=True)
    nutritional_value = models.TextField(verbose_name='Пищевая ценность продукта на 100 г', blank=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Продукт'
        verbose_name_plural = 'Продукты'
