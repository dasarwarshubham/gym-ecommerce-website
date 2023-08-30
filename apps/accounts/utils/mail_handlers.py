from django.conf import settings
from django.core.mail import EmailMessage, BadHeaderError


def sendmail(data):
    try:
        subject = 'Welcome to Fitflex Family'
        message = 'You have successfully signed up for Fitflex Account.\n {}'.format(
            data)
        from_email = settings.EMAIL_HOST_USER
        recipient_list = ['dasarwarshubham01@gmail.com']
        mail = EmailMessage(
            subject=subject,
            body=message,
            from_email=from_email,
            to=recipient_list
        )
        mail.attach_file('apps/accounts/static/images/welcome.png')
        mail.send()
        print("Welcome Email Sent")
    except BadHeaderError:
        print("Welcome Email not sent")
        # return HttpResponse('Invalid header found.')
