# amino-clock
 A simple javascript timer to be used as an overlay for streaming

 ## Contents

 - [Set up and Configuration](#set-up-and-configuration)
    - [Installing and Running](#installing-and-running-the-clock)
    - [Displaying the Clock in OBS](#displaying-the-clock-in-obs)
    - [Configuring OBS Capture](#making-adjustments-to-our-capture)
 - [Using the clock](#using-the-clock)
    - [Changing the Background](#changing-the-background-image)
    - [Clock Controller](#clock-controller)

## Set-up and Configuration

There are two main aspects of getting this clock to work for you. Running the clock, and displaying it in OBS.

### Installing and Running the Clock
In order to run the clock follow the below steps.

#### Cloning the repository with github desktop
 
First, download github desktop. This can be done by following [this link](https://desktop.github.com/)

Once you have Github Desktop installed, open it up. 
In the top left click on "Current repository". 

![current repository button in Github Desktop](image/instructions/cloningRepo_1.JPG)

In the menu that pops up, click "Add" followed by "clone repository" 

![current repository button in Github Desktop](image/instructions/cloningRepo_2.JPG)

In the dialog box that pops up, navigate to the URL tab

![current repository button in Github Desktop](image/instructions/cloningRepo_3.JPG)

Choose local path where you would like to place the clock and copy paste the url ```https://github.com/watsonmartin/aileens-clock.git``` into the url field. 
Once you've filled out these fields, click clone. 

Stick to the master branch because it will have stable releases on it. Work in progress will be on other branches. 
Whenever there are updates, you can download them by clicking "Pull origin" in the control bar at the top of Github Desktop. 

#### Running the clock

Navigate to the place where the repository is on your local machine and open up the file ```index.html```. You may do this with any browser of your choice.
You should also open up ```controller.html``` in a different window. This will provide you with controls for your clock. 



### Displaying the clock in OBS.

#### 1. Be sure that your clock is running in your browser of choice. 

Make sure you run it in its own window since we will be using a window capture to display your clock. 

![Image of clock in browser](image/instructions/obs_1.JPG)

#### 2. Add a window capture of the clock in OBS

To add a window capture, click the plus button in the sources section near the bottom left of your screen.

![Image of sources window of OBS](image/instructions/obs_2.JPG)

Choose window capture from the list that pops up

![Image of source option list](image/instructions/obs_3.jpg)

#### 3. Configure your clock capture

This will open up a dialog box for creating a new capture. Name your capture something relevant like "Realtime Clock Capture" and click OK.


![New capture name dialog](image/instructions/obs_4.JPG)

In the next dialog box, choose the window where your clock is running. You will see the clock display in a preview window.

![New capture dialog box](image/instructions/obs_5.JPG)

**Note**: Although Chrome is used in this example, **Chrome is currently not supported**. The steps remain the same if using a different browser. 

Set the Window Match Priority to "Window title must match" to ensure that the capture does not pick up some other chrome window. (If you have other tabs open in the window with the clock they may be captured when the clock closes so be careful.)

It is recommended to uncheck Capture Cursor, since you generally won't want the cursor to appear on the clock. After choosing those options, the settings menu will appear as follows:
![Capture settins filled out](image/instructions/obs_6.JPG)

When you are sure that your settings match the above, click OK.

![Capture settins filled out](image/instructions/obs_7.JPG)

Now you can see your clock in OBS! However, it still doesn't look quite right. Next we will change its shape so it will fit nicely in the corner of our screen while we stream.

### Making adjustments to our capture

If you try adjusting the size and shape of the clock by clicking and dragging the red edges of the capture in OBS, you will notice that while you may change the size, you cannot change the aspect ratio.

![Gif demonstrating fixed aspect ratio](https://media1.giphy.com/media/BRFE7dKp7oRRTbEfg0/giphy.gif)

In order to make the clock a different shape, you will need to reshape the Chrome window where the clock is running. Navigate to the window and pop it into windowed mode.

![Changing Chrome to windowed mode](image/instructions/obs_8.JPG)

Once in windowed mode, you can click the edges of the Chrome window to change its size and shape.

![Adjusting size and shape of Chrome window](https://media2.giphy.com/media/hlOqI51OSwbkC5ZhmB/giphy.gif)

Once you have a shape you are comfortable with, you can make size adjustments in OBS as shown before, and you can drag the clock to a position of your choice on screen. 

![Changing Chrome to windowed mode](image/instructions/obs_9.JPG)

Looking good! But now we need to get rid of the navigation bar at the top as well as that pesky scroll bar. In order to do so, right click the clock window in OBS. Go to Transform, then Edit Transform.

![Opening transform window for a capture](image/instructions/obs_10.JPG)

The resulting window will have controls where you can adjust the cropping of the capture. This will allow you to crop out unwanted parts of you capture. For example, I set Crop Top to 100 and Crop Right to 20 and it worked perfectly for my capture. 

![My cropped capture](image/instructions/obs_11.JPG)

And now you've done it! A beautiful clock overlay for your stream. Feel free to play around with other OBS settings like transparancies to further customize to a look that you like. 

[Back to the top](#aileens-clock)

## Using the Clock

### Changing the background image

#### Step 1- Uploading your image
Everyone is a fan of landscape paintings of mountains, but sometimes you might want to swap those mountains for a verdant forest, a stunning desert, or perhaps a fun seasonal background for the holidays. Changing the background for your clock is pretty straightforward, but tread carefully. If done wrong the clock won't show anything at all! 

In order to change the image used as the background, open up the folder where the clock is saved and navigate to the 'image' folder. Within this folder is another folder called 'background'. Place your image of choice into this folder. Give it a name that is easily identifiable as you will have to remember it later!

This is where you background image should go: alongside the default background mountains.jpg. 

![Folder where new image should be placed](image/instructions/background_1.JPG)


#### Step 2- Setting your image as the background image
Now that your image is available to the clock, you need to make sure the clock knows which image to use. Using a text editor, open up the index.html file. You need to locate the line  ```<img class="img-background" src="image/background/mountains.jpg">```. 

![index.html with background image line highlighted](image/instructions/background_2.JPG)

This line tells your browser which file to use as the background image. To change the background image, you will point the browser to your new file. Simply replace ```mountains.jpg``` with the name of the image file you uploaded to the image folder in step 1. 

![replacing image gif](![index.html with background image line highlighted](image/instructions/background_2.JPG))


Be certain the name is **EXACTLY** the same. It is case sensitive and any error will cause the clock to fail.

After making the change, save the index.html file and head over to your clock. If the changes don't display immediately try refreshing the page. If the page displays nothing there is likely a typo in the filename. Once you have several files uploaded to the image folder, you will be able to switch between them with ease by following only instructions in step 2. Have fun customizing your clock!

### Clock Controller
Access the clock controller by opening the index.html page. It features a clock view window in which
you may see your clock as it is being displayed and a control panel. These controls will allow you to interact with the
pomodoro functionality of the clock. This is done using two buttons.

#### Start Pomodoro

This button will, as the title says, start a pomodoro. This will begin a 25 minute timer from the moment the button is pressed. A coundown will be displayed at the bottom of the clock.
When no pomodoro is active, it will say "No currently active pomodoro." At the end of 25 minutes, the timer will revert back to saying "No currently active Pomodoro" and
the number of pomodoros will automatically go up by one. 

#### Reset pomodoro count

This button will, as the title says, reset the pomodoro count. When you are done tracking your pomodoros for the day or for the streaming session, simply click this button.
If you close the clock, it may be the case that the pomodoro count is retained when reopening, and you will need to reset. However, do not count on the count being maintained, as this
will depend on the policy of the browser you are using with regards to maintaining cookies. 

#### Deactivate pomodoro counter

If you do not want the pomodoro counter to display, and prefer the simple clock view, simply click this button to deactivate the counter. Once clicked, the button will change to say "Activate pomodoro counter" and can be clicked again to reactivate the pomodoro counter features.


[Back to the top](#aileens-clock)
