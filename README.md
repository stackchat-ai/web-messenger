# Stackchat Web Messenger

Stackchat Web Messenger adds live web messaging to your website or web app.

# Table of Contents

1. [Usage](#usage)
   - [Script](#script)
   - [NPM](#npm)
2. [Browser Support](#browser-support)
   - [Desktop](#desktop)
   - [Mobile](#mobile)
   - [Other Browsers](#other-browsers)
   - [Voice Support](#voice-support)
3. [API](#api)
   - [Individual Functions](#individual-functions)
   - [Delegates](#delegates)
   - [Events](#events)
   - [Embedded Mode](#embedded-mode)
4. [Content Security Policy](#content-security-policy)
5. [Acknowledgements](#acknowledgements)

# Usage

## Script

Add the following code towards the end of the `head` section on your page and replace `<app-id>` with your app id at the end of the script.

```html
<script>
  !function(e,t,n,r){function s(){try{var e;if((e="string"==typeof this.response?JSON.parse(this.response):this.response).url){var n=t.getElementsByTagName("script")[0],r=t.createElement("script");r.async=!0,r.src=e.url,n.parentNode.insertBefore(r,n)}}catch(e){}}var o,p,a,c=[],i=[];e[n]={init:function(){o=arguments;var e={then:function(t){return i.push({type:"t",next:t}),e},catch:function(t){return i.push({type:"c",next:t}),e}};return e},on:function(){c.push(arguments)},render:function(){p=arguments},destroy:function(){a=arguments}},e.__onWebMessengerHostReady__=function(t){if(delete e.__onWebMessengerHostReady__,e[n]=t,o)for(var r=t.init.apply(t,o),s=0;s<i.length;s++){var u=i[s];r="t"===u.type?r.then(u.next):r.catch(u.next)}p&&t.render.apply(t,p),a&&t.destroy.apply(t,a);for(s=0;s<c.length;s++)t.on.apply(t,c[s])};var u=new XMLHttpRequest;u.addEventListener("load",s),u.open("GET","https://assets.au.stackchat.com/sdk/web-messenger/2.1.29/loader.json",!0),u.responseType="json",u.send()}(window,document,"stackchat");
</script>
```

**Note for deployments in China**
If you are using Stackchat Web Messenger for a Chinese domain, then you will need to replace the loader URL in the above script. You can do a find and replace as well if you prefer. Replace `https://assets.au.stackchat.com` with our China based URL `https://assets.common.stackchat.com.cn`.

And then, initialise the Web Messenger by placing the following code towards the end of the `body` section of your page:

```html
<script>
  stackchat
    .init({
      appId: "<app-id>",
      region: "cn", // Add this to load assets within China
    })
    .then(function () {
      // YOUR CODE AFTER INIT IS COMPLETE
    });
</script>
```

## NPM

1. Install via `npm` or a package manager of choice:

```sh
npm install --save @stackchat/web-messenger
```

2. Import the module & initialise messenger

```javascript
import Stackchat from "@stackchat/web-messenger";

Stackchat.init({ appId: "<app-id>" }).then(function () {
  // YOUR CODE AFTER INIT IS COMPLETE
});
```

# Browser Support

Stackchat Web Messenger supports all the popular browsers

## Desktop

- **Chrome** : Latest and one major version behind
- **Edge** : Latest and one major version behind
- **Firefox** : Latest and one major version behind
- **Internet Explorer** : 11+
- **Safari** : Latest and one major version behind

## Mobile

- Stock browser on Android 4.1+
- Safari on iOS 8+

## Other Browsers

Stackchat Web Messenger is likely compatible with other and older browsers but we only test against the versions above.

## Voice Support

Stackchat Web Messenger supports speech recognition where available. This is essentially limited to browsers that have implemented the [W3C Media Stream API](https://www.w3.org/TR/mediacapture-streams/#stream-api) and where access to a recording instrumentation on a device is available. For this reason, if you are using speech recognition, please be aware that there may be compatibility issues with older browsers.

# API

## Individual Functions

- `init(options)`

  Initializes the Stackchat Web Messenger widget in the web page using the specified options. It returns a promise that will resolve when the Web Messenger is ready. **Note** that except `on` and `off`, all other methods need to be called **after** a successful `init`.

  `options`

  | Option                           | Optional? | Default value              | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
  | -------------------------------- | --------- | -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | appId                            | No        | -                          | Your app id                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
  | voice                            | Yes       | -                          | See `voice` section [below](#voice)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
  | locale                           | Yes       | `en-US`                    | Locale used for date formatting using the `<language>-<COUNTRY>` format. Language codes can be found [here](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) and country codes [here](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). <br /> **Note 1 : ** The country part is optional, and if a country is either not recognized or supported, it will fallback to using the generic language. If the language isn't supported, it will fallback to `en-US`. <br /> **Note 2:** this is _only_ used for date formatting and doesn't provide built-in translations for Web Messenger. |
  | soundNotificationEnabled         | Yes       | `true`                     | Enables the sound notification for new messages                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
  | imageUploadEnabled               | Yes       | `true`                     | Enables the image upload feature. (deprecated: use menuItems.imageUpload; if this option is `false`, it will disable `menuItems.imageUpload` and `menuItems.fileUpload`)                                                                                                                                                                                                                                                                                                                                                                                                                        |
  | fixedIntroPane                   | Yes       | `false`                    | When enabled, the introduction pane will be pinned at the top of the conversation instead of scrolling with it.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
  | embedded                         | Yes       | False                      | Tells the widget it will be embedded. (see Embedded section below)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
  | displayStyle                     | Yes       | `button`                   | Choose how the messenger will appear on your website. Must be either `button` or `tab`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
  | buttonIconUrl                    | Yes       | -                          | When the `displayStyle` is `button`, you have the option of selecting your own button icon. The image must be at least 200 x 200 pixels and must be in either JPG, PNG, or GIF format.                                                                                                                                                                                                                                                                                                                                                                                                          |
  | buttonWidth                      | Yes       | `58px`                     | When the `displayStyle` is `button`, you have the option of specifying the button width.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
  | buttonHeight                     | Yes       | `58px`                     | When the `displayStyle` is `button`, you have the option of specifying the button height.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
  | businessName                     | Yes       | -                          | A custom business name.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
  | businessIconUrl                  | Yes       | -                          | A custom business icon url. The image must be at least 200 x 200 pixels and must be in either JPG, PNG, or GIF format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
  | backgroundImageUrl               | Yes       | -                          | A background image url for the conversation. Image will be tiled to fit the window.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
  | integrationOrder                 | Yes       | -                          | Array of integration IDs. When set, only integrations from this list will be displayed. If an empty array is used, no integrations will be displayed. _Note_: Listing an integration in the array doesn't guarantee that it will be displayed in the Web Messenger.                                                                                                                                                                                                                                                                                                                             |
  | customColors                     | Yes       | See [below](#customColors) | Colors used in the Web Messenger UI.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
  | customText                       | Yes       | See [below](#customText)   | Strings used in the Web Messenger UI. You can use these to either customize the text or translate it. _Note_: Some strings include variables (surrounded by `{}`) which must remain in your customized text.                                                                                                                                                                                                                                                                                                                                                                                    |
  | menuItems                        | Yes       | See below.                 | Choose menu items.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
  | notificationChannelPromptEnabled | Yes       | `true`                     | Enables displaying a prompt to new users after their first message to suggest linking their chat instance with their other 3rd-party apps.                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

  `customColors`

  | Option            | Optional? | Default value | Description                                                                                                                           |
  | ----------------- | --------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
  | brandColor        | Yes       | `65758e`      | This color will be used in the messenger header and the button or tab in idle state. Must be a 3 or 6-character hexadecimal color.    |
  | conversationColor | Yes       | `0099ff`      | This color will be used for customer messages, quick replies and actions in the footer. Must be a 3 or 6-character hexadecimal color. |
  | actionColor       | Yes       | `0099ff`      | This color will be used for call-to-actions inside your messages. Must be a 3 or 6-character hexadecimal color.                       |

  `customText`

  The list of localizable strings. These strings can be modified. _If an option is not given a custom string, the default value will be used._

  | Option                              | Default value                                                  |
  | ----------------------------------- | -------------------------------------------------------------- |
  | clickToRetry                        | Message not delivered. Click to retry.                         |
  | connectNotificationText             | Be notified inside your other apps when you get a reply.       |
  | connectNotificationSingleText       | Be notified when you get a reply.                              |
  | connectNotificationSingleButtonText | Turn on `<name>` notifications                                 |
  | connectNotificationOthersText       | others                                                         |
  | conversationTimestampHeaderFormat   | MMMM D YYYY, h:mm A                                            |
  | fetchHistory                        | Load more                                                      |
  | fetchingHistory                     | Retrieving history...                                          |
  | headerText                          | How can we help?                                               |
  | imageClickToReload                  | Click to reload image.                                         |
  | imageClickToView                    | Click to view {size} image.                                    |
  | imagePreviewNotAvailable            | Preview not available.                                         |
  | inputPlaceholder                    | Type a message...                                              |
  | introAppText                        | Message us below or from your favorite app.                    |
  | introductionText                    | We\'re here to talk, so ask us anything!                       |
  | messageError                        | An error occured while sending your message. Please try again. |
  | messageIndicatorTitlePlural         | (`{count}`) New messages                                       |
  | messageIndicatorTitleSingular       | (`{count}`) New message                                        |
  | messageRelativeTimeDay              | `{value}`d ago                                                 |
  | messageRelativeTimeHour             | `{value}`h ago                                                 |
  | messageRelativeTimeJustNow          | Just now                                                       |
  | messageRelativeTimeMinute           | `{value}`m ago                                                 |
  | messageTimestampFormat              | h:mm A                                                         |
  | messageSending                      | Sending...                                                     |
  | messageDelivered                    | Delivered                                                      |
  | sendButtonText                      | Send                                                           |
  | settingsHeaderText                  | Settings                                                       |
  | tapToRetry                          | Message not delivered. Tap to retry.                           |
  | unsupportedMessageType              | Unsupported message type.                                      |
  | unsupportedActionType               | Unsupported action type.                                       |
  | voiceConnecting                     | Please wait...                                                 |
  | voiceListening                      | I'm listening...                                               |
  | voiceNoSpeechDetected               | No speech detected.                                            |
  | voiceNoMicrophoneAccess             | Microphone access disabled.                                    |

  See below for an example:

  ```javascript
  var initPromise = stackchat
    .init({
      appId: "<app-id>",
      // Leave unspecified for US region (default)
      region: "au",
      // For authenticated mode
      jwt: "your_jwt",
      userId: "user_id",
      locale: "en-US",
      customColors: {
        brandColor: "65758e",
        conversationColor: "65758e",
        actionColor: "65758e",
      },

      fixedIntroPane: false,

      customText: {
        clickToRetry: "Message not delivered. Click to retry.",
        connectNotificationText:
          "Be notified inside your other apps when you get a reply.",
        connectNotificationSingleText: "Be notified when you get a reply.",
        connectNotificationSingleButtonText: "Turn on <name> notifications",
        connectNotificationOthersText: "others",
        conversationTimestampHeaderFormat: "MMMM D YYYY, h:mm A",
        fetchHistory: "Load more",
        fetchingHistory: "Retrieving history...",
        headerText: "How can we help?",
        imageClickToReload: "Click to reload image.",
        imageClickToView: "Click to view {size} image.",
        imagePreviewNotAvailable: "Preview not available.",
        inputPlaceholder: "Type a message...",
        introAppText: "Message us below or from your favorite app.",
        introductionText: "We're here to talk, so ask us anything!",
        messageError:
          "An error occured while sending your message. Please try again.",
        messageIndicatorTitlePlural: "({count}) New messages",
        messageIndicatorTitleSingular: "({count}) New message",
        messageRelativeTimeDay: "{value}d ago",
        messageRelativeTimeHour: "{value}h ago",
        messageRelativeTimeJustNow: "Just now",
        messageRelativeTimeMinute: "{value}m ago",
        messageTimestampFormat: "h:mm A",
        messageSending: "Sending...",
        messageDelivered: "Delivered",
        sendButtonText: "Send",
        settingsHeaderText: "Settings",
        tapToRetry: "Message not delivered. Tap to retry.",
        unsupportedMessageType: "Unsupported message type.",
        unsupportedActionType: "Unsupported action type.",
      },
    })
    .then(function () {
      // Your code after init is complete
    });

  initPromise.then(function () {
    // do something
  });

  // pass it around...

  initPromise.then(function () {
    //do something else
  });
  ```

  `voice`

  The web-messenger will support Speech Recognition if the service has been made available to the user, to enable it there is a voice configuration object that can be passed in by the user to the init method.

  | Option              | Optional? | Default value | Description                                                                                                                                                                                                                      |
  | ------------------- | --------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | voiceOnly           | Yes       | `false`       | Disables the text input and replaces it with a push to talk button                                                                                                                                                               |
  | voiceOnlyFallback\* | Yes       | `text`        | If voice only is set to true and the client device does not support voice then this option will handle what to do for those unsupported devices, options are `text`, `destroy` or a function that returns either of those values |
  | locale              | Yes       | en_us         | Set the voice support language, must conform to BCP-47                                                                                                                                                                           |

  - **`voiceOnlyFallback`** - The two options for fallback are `text` or `destroy`, the `text` fallback will revert the application to a basic keyboard based input, while `destroy` will fail the initialization of the app and prevent the widget from being instantiated, this option is for users that only want to support voice and display nothing in all other instances.

- `open()`

  Opens the conversation widget (no-op when embedded)

  ```javascript
  stackchat.open();
  ```

- `close()`

  Closes the conversation widget (no-op when embedded)

  ```javascript
  stackchat.close();
  ```

- `isOpened()`

  Tells if the widget is currently opened or closed.

  ```javascript
  stackchat.isOpened();
  ```

- `destroy()`

  Destroys the Web Messenger and makes it disappear. The Web Messenger has to be reinitialized with `init` to be working again because it also clears up the app id from the Web Messenger. It will also unbind all listeners you might have with `stackchat.on`.

  ```javascript
  stackchat.destroy();
  ```

- `sendMessage(message)`

  Sends a message on the user's behalf

  ```javascript
  stackchat.sendMessage({
    type: "text",
    text: "hello",
  });

  // OR

  stackchat.sendMessage("hello");
  ```

- `getConversation()`

  Returns the conversation if it exists

  ```javascript
  var conversation = stackchat.getConversation();
  ```

- `startConversation()`

  Creates a user and conversation on the server, allowing the business to reach out proactively to the user via the public API.

  It is strongly recommended to only call this method in the case where a message is likely to be sent.

  This method is called automatically when starting a conversation via the `sendMessage` method, or when a user sends a message via the conversation view.

  If a conversation already exists for the current user, this call is a no-op.

  ```javascript
  stackchat.startConversation();
  ```

- `setPredefinedMessage(message)`

  Prefills the user's chat input with a predefined message.

  ```javascript
  stackchat.setPredefinedMessage(message);
  ```

- `simulateMessage(message, ?avatar)`

  Simulates a message to the client without ever sending one to the server, these messages will not be persisted between sessions.

  Takes in an optional second parameter for displaying an avatar associated with the message, this will default to gravatar's empty gray user icon if left blank.

  ```javascript
  stackchat.simulateMessage(message);
  ```

- `simulateMessage(messageObject, ?avatar)`

  Simulates a message which has specified predefined reply options.

  ```javascript
  stackchat.simulateMessage({
    message: "Would you like an ice cream?",
    actions: ["Yes", "No"],
  });
  ```

- `triggerPostback(payload, metadata)`

  Manually trigger a postback message on the users behalf.

  ```javascript
  stackchat.triggerPostback(payload, metadata).then(() => {
    console.log("postback sent");
  });
  ```

- `showActivityIndicator(?avatar)`

  Simulates the behaviour of the bot typing. Shows up as flickering three dots in a message bubble.

- `hideActivityIndicator()`

  Removes the typing indicator from the conversation so that the conversation may proceed.

- `openSpeechRecognitionModal()`

  Opens up the user speech recognition prompt and begins listening for a user command, this can't be called before the messenger client has finished it's initialisation.

  ```javascript
  stackchat.init({...}).then(() => {
      document.getElementById("open-modal").addEventListener("click", () => {
          stackchat.openSpeechRecognitionModal();
      });
  })
  ```

- `closeSpeechRecognitionModal()`

  Closes the modal and aborts the current recognition event

  ```javascript
  stackchat.closeSpeechRecognitionModal();
  ```

- `setDelegate(delegate)`

  See the section on [Delegates](#delegates) below

- `updateAnalyticsId`

  By default, a user's unique Stackchat ID will be used when your chatbot sends server-side requests to your configured analytics integrations. However, you may want to override this behaviour so that Stackchat uses a different ID, such as the visitor ID that your website has assigned to the user. This is helpful to get a single view of user behaviour across both website and chatbot.

  **Adobe Analytics**

  If you've configured Adobe Analytics report suite for your Stackchat bot, then you can call `updateAnalyticsId` method with the below parameter in order to override the visitor ID that your chatbot uses when making server-side requests to Adobe Analytics. If you have server-side forwarding to Adobe Audience Manager configured, then you need to include the `regionId`, otherwise it is not required

  ```javascript
  stackchat.updateAnalyticsId({
    adobeAnalytics: {
      experienceCloudVisitorId: "ENTER_YOUR_VISITOR_ID_HERE",
      regionId: "ENTER_YOUR_REGION_ID_HERE",
    },
  });
  ```

  - Populate `experienceCloudVisitorId` property with a value fetched from [getMarketingCloudVisitorId](https://docs.adobe.com/content/help/en/id-service/using/id-service-api/methods/getmcvid.html)
  - Populate `regionId` property with a value fetched from [getLocationHint](https://docs.adobe.com/content/help/en/id-service/using/id-service-api/methods/getlocationhint.html)
  - **Note**: One API call is made to Adobe Analytics for every message received from the user.

- `hasConversationStarted()`

 Returns a boolean that when true indicates the a user has previously started a conversation and false when they have not, this is useful for those times when you might want to execute som behaviours depending on whether a user has or has engaged with the widget yet.

 ```javascript
  const hasStarted = stackchat.hasConversationStarted();

  if (hasStarted) {
    // Conversation started, do something...
  } else {
    // Converstaion not yet started, do something...
  }
 ```

## Delegates

Stackchat Web Messenger allows you to set a delegate to receive callbacks when important changes happen in the conversation. To set a delegate, use the following `setDelagate` method:

```javascript
stackchat.setDelegate(delegate);
```

Delegates should be set after `stackchat.init` has been called, like so:

```javascript
stackchat.init({ appId: '<app-id>' })
  .then(
    () => {
      stackchat.setDelegate(...)
    }
  )
```

You can use the one or more of the following delegates:

- `beforeDisplay`

  The `beforeDisplay` delegate allows a message to be hidden or modified before it is displayed in the conversation. This delegate should return a falsy value such as `null` to hide the message. It can also return a modified message object in order to change what the user will see rendered in their conversation history. **Note** that this change affects the client side rendering only; the server side copy of this message can not be modified by this delegate.

  ```javascript
  stackchat.setDelegate({
    beforeDisplay(message) {
      if (message.metadata && message.metadata.isHidden) {
        return null;
      }

      return message;
    },
  });
  ```

- `beforeSend`

  The `beforeSend` delegate method allows you to modify properties of a message before sending it to stackchat. **The modified message must be returned for it to take effect.**

  ```javascript
  stackchat.setDelegate({
    beforeSend(message) {
      // YOUR CODE HERE

      return modifiedMessage;
    },
  });
  ```

- `beforePostbackSend`

  The `beforePostbackSend` delegate method allows you to modify properties of a postback before sending it to stackchat. **The modified postback must be returned for it to take effect.**

  ```javascript
  stackchat.setDelegate({
    beforePostbackSend(postback) {
      postback.metadata = {
        any: "info",
      };
      return postback;
    },
  });
  ```

- `beforeWebviewDisplay`

  ```javascript
  stackchat.setDelegate({
    beforeWebviewDisplay(url, metadata) {
      console.log(url);
      return false; // to cancel action
      // return;    // to allow original behavior, e.g. a no-op
      // return 'http://go.here.instead.com?utm=webviewIntercept' // to replace the URL
    },
  });
  ```

  The `metadata` parameter has the following structure:

  ```javascript
  metadata = {
    event, // The click event from the browser
  };
  ```

## Events

To bind an event, use `stackchat.on(<event name>, <handler>);`. To unbind events, you can either call `stackchat.off(<event name>, handler)` to remove one specific handler, call `stackchat.off(<event name>)` to remove all handlers for an event, or call `stackchat.off()` to unbind all handlers.

**Note**: If you want to make sure your events are triggered, try to bind them before calling `stackchat.init`, like so:

```javascript
stackchat.on('<event-1>', function() { ... });
stackchat.on('<event-2>', function() { ... });
stackchat.on('<event-3>', function() { ... });

stackchat.init(...).then(function() {
    // Your code after init is complete
});
```

- `ready`

  This event triggers when init completes successfully

  ```javascript
  stackchat.on("ready", function () {
    console.log("the init has completed!");
  });
  ```

- `destroy`

  This event triggers when the widget is destroyed.

  ```javascript
  stackchat.on("destroy", function () {
    console.log("The widget is destroyed!");
  });
  ```

  This is triggered in response to `stackchat.destroy()`

- `message:received`

  This event triggers when the user receives a message

  ```javascript
  stackchat.on("message:received", function (message) {
    console.log("The user received a message", message);
  });
  ```

- `message:sent`

  This event triggers when the user sends a message

  ```javascript
  stackchat.on("message:sent", function (message) {
    console.log("The user sent a message", message);
  });
  ```

- `message`

  This event triggers when a message was added to the conversation

  ```javascript
  stackchat.on("message", function (message) {
    console.log("A message was added to the conversation", message);
  });
  ```

- `unreadCount`

  This event triggers when the number of unread messages changes

  ```javascript
  stackchat.on("unreadCount", function (unreadCount) {
    console.log("The number of unread messages was updated", unreadCount);
  });
  ```

- `widget:opened`

  This event triggers when the widget is opened

  ```javascript
  stackchat.on("widget:opened", function () {
    console.log("Widget is opened!");
  });
  ```

- `widget:closed`

  This event triggers when the widget is closed

  ```javascript
  stackchat.on("widget:closed", function () {
    console.log("Widget is closed!");
  });
  ```

- `speech:start`

  This event triggers when the widget starts recording voice input

  ```javascript
  stackchat.on("speech:start", function () {
    console.log("Widget is recording now!");
  });
  ```

- `speech:end`

  This event triggers when the widget stops recording voice input

  ```javascript
  stackchat.on("speech:end", function () {
    console.log("Widget has stopped recording now!");
  });
  ```

- `speech:error`

  This event triggers when the widget encounters an error while recording voice input

  ```javascript
  stackchat.on("speech:error", function (error) {
    console.log(error.type, error.message);
  });
  ```

## Embedded Mode

As describe above, to activate the embedded mode, you need to pass `embedded: true` when calling `stackchat.init`. By doing so, you are disabling the auto-rendering mechanism and you will need to call `stackchat.render` manually. This method accepts a DOM element which will be used as the container where the widget will be rendered.

The embedded widget will take full width and height of the container. You must give it a height, otherwise, the widget will collapse.

# Content Security Policy

If your deployment requires [CSP compatibility](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP), add the following meta tag to your configuration.

```html
<meta
  http-equiv="Content-Security-Policy"
  content="
    connect-src
        wss://*.stackchat.com
        https://*.stackchat.com;
    font-src
        https://*.stackchat.com;
    script-src
        https://*.stackchat.com;
    style-src
        https://*.stackchat.com;
    img-src
        blob:
        https://*.stackchat.com;"
/>
```

Note that an equivalent configuration can be done [server side](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy).

According to the channels you use, other domains may need to be added (these are used to display QR codes to link to the Stackchat Web Messenger conversation):

- LINE: https://qr-official.line.me
- WeChat: https://mp.weixin.qq.com

Note that your CSP configuration should also include any domains used to host images or files sent in messages.
If you require `blob:` to be excluded for `img-src`, you must disable the image upload feature via the [init settings](#initoptions).

# Acknowledgements

https://github.com/lipis/flag-icon-css
