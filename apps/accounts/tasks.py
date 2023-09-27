from time import sleep
from celery import shared_task
from .utils.mail_handlers import send_reset_password_mail, send_verification_mail, \
    send_new_order_mail_to_admin, send_new_order_mail_to_user, send_contact_us_form_to_admin


@shared_task
def send_new_order_mail_admin(order_data):
    print("Sending new order mail to admin...")
    send_new_order_mail_to_admin(order_data)
    print("New order mail sent successfully to admin!")

@shared_task
def send_new_order_mail_user(order_data):
    print("Sending new order mail to user...")
    send_new_order_mail_to_user(order_data)
    print("New order mail sent successfully to user!")


@shared_task
def send_new_contact_mail(data):
    print("Sending new user inquiry form to admin...")
    send_contact_us_form_to_admin(data)
    print("New user inquiry sent to admin successfully!")


@shared_task
def send_email_verification_mail(message):
    print("Sending email verification link to user...")
    send_verification_mail(message)
    print("Email verification link sent successfully!")


@shared_task
def send_reset_password_email(message):
    print("Sending password reset email...")
    send_reset_password_mail(message)
    print("Email sent successfully for reseting password!")

# example periodic tasks
# for periodic tasks you need to run celerybeat


@shared_task
def periodic_task():
    print("Starting Periodic Task")
    sleep(3)
    print("Periodic Task Completed Successfully")
