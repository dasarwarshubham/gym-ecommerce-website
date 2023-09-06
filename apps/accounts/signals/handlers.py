from django.dispatch import receiver
from apps.core.signals import order_created


@receiver(order_created)
def on_order_created(sender, **kwargs):
    print("Signal: ", kwargs['order'])
