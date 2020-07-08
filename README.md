# 03 JavaScript: Password Generator

[My Password Generator.](https://a-thread.github.io/Password-Generator-Aiden/)

The assignment was to create an application that generates a random password with user-selected criteria. It needed to run in the browser and feature a dynamically updated HTML and CSS powered by my JavaScript code. It also needed to be clean, polished, and responsive to multiple screen sizes. 

## Styling

I used Bootstrap to streamline the look of the page and make it more responsive to multiple screen sizes, cleaning up the local CSS sheet to get rid of unnecessary styling. Below you will see on the left the original look and on the right, my updated site.

<img src="/ScreenShots/before.png" width=300px /> <img src="/ScreenShots/my-site-mobile.png" width=300px />

## Javascript

The assignment required us to ask the user to choose a character length between 8 and 128 and to include one or more of the following:
- uppercase letters
- lowercase letters
- numbers
- special characters
I used prompts in my application to interface with the user. 

<img src="/ScreenShots/upper-case.png" width=400px /> <img src="/ScreenShots/lower-case.png" width=400px /> <img src="/ScreenShots/numbers.png" width=400px /> <img src="/ScreenShots/special-characters.png" alt="showing Aiden's site" width=400px />

If the user did not choose any of the criteria, an alert would pop up telling them that they had to choose one of the character types.
<img src="/ScreenShots/choose-one.png" width=400px />

If the user choose a letter instead of a number for their password, an alert would pop up telling them that they had to choose a number.
<img src="/ScreenShots/choose-number.png" width=400px />

Another alert would pop up if the user chose a number for their password length below 8 or above 128.
<img src="/ScreenShots/too-short.png" width=400px /> <img src="/ScreenShots/too-long.png" width=400px />

If the user successfully navigated through the criteria, their password would then appear in the main container to be copied.
<img src="/ScreenShots/generated-password.png" width=500px />

## Responsive Screens
The file given to us to modify was responsive at the very beginning so I just made minor changes to the button sizes to make sure that it was large enough to clearly read on smaller screens. 

**If you have any questions about this page or the application, email Aiden Threadgoode at *<aiden.threadgoode@gmail.com>.**