/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * COPYRIGHT: Stackchat Ltd Pty 2018, All rights reserved
 *
 * CREATION DATE:  23 Apr 2018
 */

/**
 * Stackchat Web Messenger Object
 */
declare let stackchat: Stackchat;
export default stackchat;
export interface Stackchat {
  close(): void;
  closeSpeechRecognitionModal(): void;
  destroy(): void;
  getConversation(): Conversation;
  getUser(): StackchatUser;
  hideActivityInidicator(): void;
  init(options: StackchatInitOptions): Promise<{}>;
  isOpened(): boolean;
  login(userId: string, jwt: string): void;
  logout(): void;
  markAllAsRead(): void;
  off(event?: StackchatEvent, handler?: (...args: any[]) => void): void;
  on<E extends StackchatEvent>(
    event: E,
    handler: StackchatEventHandler<E>
  ): void;
  open(): void;
  openSpeechRecognitionModal(): void;
  render(node: HTMLElement): void;
  setDelegate(options: DeletegateOptions): void;
  setPredefinedMessage(message: string): void;
  sendMessage(message: MessageUnion): void;
  showActivityIndicator(avatar?: string): void;
  showNotificationChannelPrompt(): void;
  simulateMessage(message: string, avatar?: string): void;
  simulateMessage(
    message: { text: string; actions: string[] },
    avatar?: string
  ): void;
  startConversation(): void;
  triggerPostback(actionId: string): void;
  updateUser(user: StackchatUser): void;
  updateLocale(locale: string): void;
  updateAnalyticsId(tracking: AnalyticsTracking): void;
  isRecording(): boolean;
  addMessages(messages: any[]): void;
  setConversation(conversation: any): void;
  getPersonas(): {
    [ persona: string ]: string;
  };
  hasConversationStarted(): boolean;
}

export interface DeletegateOptions {
  beforeDisplay?(message: MessagePayload): MessagePayload;
  beforeSend?<T extends MessageUnion>(message: MessageUnion): T;
}

export interface Conversation {
  messages: MessageUnion[];
  // rejectedMessages: { };
  // completedUploads: [];
  // replyActions: {
  //     actions: [];
  //     message: { }
  // };
  unreadCount: number;
  hasMoreMessages: boolean;
  isFetchingMoreMessagesFromServer: boolean;
}

export type StackchatEvent =
  | StackchatReadyEvent
  | StackchatDestroyEvent
  | StackchatMessageReceivedEvent
  | StackchatMessageSentEvent
  | StackchatMessageEvent
  | StackchatUnreadCountEvent
  | StackchatWidgetOpenEvent
  | StackchatWidgetCloseEvent
  | StackchatSpeechEndEvent
  | StackchatSpeechStartEvent
  | StackchatSpeechErrorEvent;

export type StackchatReadyEvent = "ready";
export type StackchatDestroyEvent = "destroy";
export type StackchatMessageReceivedEvent = "message:received";
export type StackchatMessageSentEvent = "message:sent";
export type StackchatMessageEvent = "message";
export type StackchatUnreadCountEvent = "unreadCount";
export type StackchatWidgetOpenEvent = "widget:opened";
export type StackchatWidgetCloseEvent = "widget:closed";
export type StackchatSpeechStartEvent = "speech:start";
export type StackchatSpeechEndEvent = "speech:end";
export type StackchatSpeechErrorEvent = "speech:error";

// tslint:disable
export type StackchatEventHandler<E> = E extends StackchatMessageReceivedEvent
  ? (message: MessagePayload) => void
  : E extends StackchatMessageSentEvent
  ? (message: MessageUnion) => void
  : E extends StackchatMessageEvent
  ? (message: MessagePayload) => void
  : E extends StackchatUnreadCountEvent
  ? (unread: number) => void
  : E extends StackchatSpeechErrorEvent
  ? (error: StackchatSpeechError) => void
  : () => void;
// tslint:enable

export interface StackchatUser {
  _id: string;
  properties: {
    [ key: string ]: any;
  };
  userId?: string;
  signedUpAt?: string;
  clients?: StackchatUserClient[];
  pendingClient?: StackchatUserClient[];
  conversationStarted?: boolean;
  credentialRequired?: boolean;
  email?: string;
  givenName?: string;
  surname?: string;
}

export interface StackchatUserClient {
  active: boolean;
  platform: StackchatPlatform;
  primary: boolean;
  id: string;
  displayName?: string;
  avatarUrl?: string;
  info?: {
    [ key: string ]: any;
  };
  raw?: {
    [ key: string ]: any;
  };
  appVersion?: string;
  lastSeen?: string;
  linkedAt?: string;
}

export type StackchatPlatform =
  | "web"
  | "ios"
  | "android"
  | "messenger"
  | "viber"
  | "telegram"
  | "wechat"
  | "line"
  | "twilio"
  | "frontendEmail"
  | "other"
  | string;

type FallbackOptions = "text" | "destroy";

export interface VoiceOptions {
  locale?: string;
  sampleRate?: number;
  voiceOnly?: boolean;
  voiceOnlyFallback?: FallbackOptions | (() => FallbackOptions);
}

export interface StackchatSpeechError {
  type: "voiceNoSpeechDetected" | "voiceNoMicrophoneAccess";
  message: string;
}

/**
 * Stackchat web options that are passed into the init method.
 */
export interface StackchatInitOptions {
  appId: string;
  /**
   * An auth code for linking to an existing conversation (see more details
   * here)
   */
  authCode?: string;
  /**
   * A background image url for the conversation. Image will be tiled to fit the
   * window.
   */
  backgroundImageUrl?: string;
  /**
   * A custom business icon url. The image must be at least 200 x 200 pixels
   * and must be in either JPG, PNG, or GIF format.
   */
  businessIconUrl?: string;
  /** A custom business name. */
  businessName?: string;
  /**
   * When the displayStyle is button, you have the option of selecting your
   * own button icon. The image must be at least 200 x 200 pixels and must
   * be in either JPG, PNG, or GIF format.
   */
  buttonIconUrl?: string;
  /**
   * When the displayStyle is button, you have the option of specifying the
   * button height.
   * Default - 58px
   */
  buttonHeight?: string;
  /**
   * When the displayStyle is button, you have the option of specifying the
   * button width.
   * Default - 58px
   */
  buttonWidth?: string;
  /**
   * The web messenger renders to the screen without any inputs.
   */
  renderOnly?: boolean;
  /** Colors used in the Web Messenger UI. */
  customColors?: StackchatWebCustomColours;
  /**
   * Strings used in the Web Messenger UI. You can use these to either
   * customize the text or translate it. Note: Some strings include
   * variables (surrounded by {}) which must remain in your customized
   * text.
   */
  customText?: StackchatWebCustomText;
  /**
   * An image that is used as a avatar for each message if the message
   * does not have an avatar URL specified.
   * Default: https://assets.au.stackchat.com/sdk/web-messenger/2.1.1/7d6ff87ab26a35cc6737340da24b4067.jpg
   */
  defaultAvatarUrl?: string;
  /**
   * Choose how the messenger will appear on your website. Must be either
   * button or tab.
   * Default - button
   */
  displayStyle?: "button" | "tab";
  /**
   * Tells the widget it will be embedded. (see Embedded section below).
   * Default - false
   */
  embedded?: boolean;
  /**
   * When enabled, the introduction pane will be pinned at the top of
   * the conversation instead of scrolling with it.
   */
  fixedIntroPane?: boolean;
  /**
   * Enables the image upload feature. (deprecated: use menuItems.imageUpload;
   * if this option is false, it will disable menuItems.imageUpload and
   * menuItems.fileUpload).
   * Default - true
   */
  imageUploadEnabled?: boolean;
  /**
   * Array of integration IDs. When set, only integrations from this
   * list will be displayed.If an empty array is used, no integrations
   * will be displayed.
   * ** Note: ** Listing an integration in the array doesn't guarantee
   * that it will be displayed in the Web Messenger.
   */
  integrationOrder?: string[];
  /**
   * Token to authenticate your communication with the server
   * (see http://docs.Stackchat.io/javascript/#authenticating-users-optional)
   */
  jwt?: string;
  /**
   * Locale used for date formatting using the <language>-<COUNTRY> format.
   * Language codes can be found here and country codes here.
   * ** Note 1 : ** The country part is optional, and if a country is either
   * not recognized or supported, it will fallback to using the generic language.
   * If the language isn't supported, it will fallback to en-US.
   * ** Note 2 : ** this is only used for date formatting and doesn't provide
   * built-in translations for Web Messenger. Refer to the documentation for
   * how to handle translations.
   * Default - "en-US"
   */
  locale?: string;
  /** Choose menu items. */
  menuItems?: StackchatWebCustomMenus;
  /**
   * Enables the sound notification for new messages.
   * Default - true
   */
  /** Specifies which region to load the assets from  defaults to RoW*/
  region?: "cn";
  soundNotificationEnabled?: boolean;
  /** User's id */
  userId?: string;
  /** Speech Recognition setup. */
  voice?: VoiceOptions;
}

export interface StackchatWebCustomColours {
  /**
   * This color will be used in the messenger header and the
   * button or tab in idle state. Must be a 3 or 6-character
   * hexadecimal color.
   * Default - 65758E
   */
  brandColor?: string;
  /**
   * This color will be used for customer messages, quick
   * replies and actions in the footer. Must be a 3 or 6-character
   * hexadecimal color.
   * Default - 0099ff
   */
  conversationColor?: string;
  /**
   * This color will be used for call-to-actions inside your messages.
   * Must be a 3 or 6-character hexadecimal color.
   * Default - 0099ff
   */
  actionColor?: string;
}

export interface StackchatWebCustomText {
  actionPaymentCompleted?: string;
  actionPaymentError?: string;
  actionPostbackError?: string;
  clickToRetry?: string;
  connectNotificationText?: string;
  connectNotificationSingleText?: string;
  connectNotificationSingleButtonText?: string;
  connectNotificationOthersText?: string;
  conversationTimestampHeaderFormat?: string;
  emailChangeAddress?: string;
  emailDescription?: string;
  emailFieldLabel?: string;
  emailFieldPlaceholder?: string;
  emailFormButton?: string;
  fetchHistory?: string;
  fetchingHistory?: string;
  frontendEmailChannelDescription?: string;
  headerText?: string;
  inputPlaceholder?: string;
  introAppText?: string;
  introductionText?: string;
  invalidFileError?: string;
  lineChannelDescription?: string;
  locationNotSupported?: string;
  locationSecurityRestriction?: string;
  locationSendingFailed?: string;
  locationServicesDenied?: string;
  messageError?: string;
  messageIndicatorTitlePlural?: string;
  messageIndicatorTitleSingular?: string;
  messageRelativeTimeDay?: string;
  messageRelativeTimeHour?: string;
  messageRelativeTimeJustNow?: string;
  messageRelativeTimeMinute?: string;
  messageTimestampFormat?: string;
  messageSending?: string;
  messageDelivered?: string;
  messengerChannelDescription?: string;
  notificationSettingsChannelsDescription?: string;
  notificationSettingsChannelsTitle?: string;
  notificationSettingsConnected?: string;
  notificationSettingsConnectedAs?: string;
  sendButtonText?: string;
  settingsHeaderText?: string;
  smsBadRequestError?: string;
  smsCancel?: string;
  smsChangeNumber?: string;
  smsChannelDescription?: string;
  smsChannelPendingDescription?: string;
  smsContinue?: string;
  smsInvalidNumberError?: string;
  smsLinkCancelled?: string;
  smsLinkPending?: string;
  smsPingChannelError?: string;
  smsSendText?: string;
  smsStartTexting?: string;
  smsTooManyRequestsError?: string;
  smsTooManyRequestsOneMinuteError?: string;
  smsUnhandledError?: string;
  tapToRetry?: string;
  telegramChannelDescription?: string;
  unsupportedMessageType?: string;
  unsupportedActionType?: string;
  linkError?: string;
  voiceConnecting?: string;
  voiceListening?: string;
  voiceNoSpeechDetected?: string;
  voiceNoMicrophoneAccess?: string;
  viberChannelDescription?: string;
  viberChannelDescriptionMobile?: string;
  viberQRCodeError?: string;
  wechatChannelDescription?: string;
  wechatChannelDescriptionMobile?: string;
  wechatQRCodeError?: string;
}

export interface StackchatWebCustomMenus {
  // Enables the image upload menu item
  // Default - true
  imageUpload: boolean;
  // Enables the file upload menu item
  // Default - true
  fileUpload: boolean;
  // Enables the share location menu item
  // Default - true
  shareLocation: boolean;
}

export interface ImageDisplaySettings {
  imageAspectRation?: "square" | "horizontal";
}

export type MessageType =
  | "text"
  | "image"
  | "file"
  | "carousel"
  | "location"
  | "list";

export type Role = "appUser" | "appMaker";

export type Channels =
  | "web"
  | "ios"
  | "android"
  | "messenger"
  | "viber"
  | "telegram"
  | "wechat"
  | "line"
  | "twilio"
  | "api";

export type ActionTypes =
  | "link"
  | "reply"
  | "postback"
  | "share"
  | "locationRequest"
  | "buy"
  | "webview";

export interface Source {
  type: Channels;
  id?: string;
  integrationId?: string;
}

export type Metadata = {
  [ key: string ]: number | string | boolean;
};

export interface MessageCoordinates {
  _id: string;
  lat: string;
  long: string;
}

export interface Action {
  _id: string;
  type: ActionTypes;
  uri?: string;
  text?: string;
  payload?: any;
  amount?: number;
  currency?: string;
  state?: string;
  default?: boolean;
  // Flat map of user defined metadata
  metadata?: Metadata;
  // type this
  extraChannelOptions?: any;
  iconUrl?: string;
  size?: string;
  fallback?: string;
}

export interface Item {
  _id: string;
  title: string;
  description?: string;
  mediaUrl?: string;
  mediatType?: string;
  size?: "compact" | "large";
  actions: Action[];
  metadata?: Metadata;
}

export type UserMessage = string | { type: string; text: string };

export interface MessagePayload {
  _id: string;
  type: MessageType;
  text: string;
  role: Readonly<Role | "whisper">;
  authorId: string;
  name?: string;
  received: string;
  source: Source;
  avatarUrl?: string;
  actions?: Action[];
  items?: Item[];
  mediaUrl?: string;
  mediaType?: string;
  mediaSize?: string;
  // This is alluded to in the document but not explicitly shown in the schema,
  // but apparently metadata can be found on the payloaded property
  // https://docs.smooch.io/rest/#metadata-schema
  metadata?: Metadata;
  coordinates?: MessageCoordinates;
  deleted?: boolean;
}

// Message Post to server
export interface Message {
  // Webclient automatically includes this.
  // role: Role;
  name?: string;
  email?: string;
  avatarUrl?: string;
  destination?: Channels;
  metadata?: Metadata;
  payload?: any;
}

export interface TextMessage extends Message {
  type: "text";
  text: string;
  actions?: Action[];
}

export interface ImageMessage extends Message {
  type: "image";
  text?: string;
  actions?: Action[];
  mediaUrl: string;
  mediaType?: string;
}

export interface FileMessage extends Message {
  type: "file";
  text?: string;
  mediaUrl: string;
  mediaType?: string;
}

export interface LocationMessage extends Message {
  type: "location";
  coordinates: {
    lat: string;
    long: string;
  };
}

export interface CarouselMessage extends Message {
  type: "carousel";
  items: Item[];
  displaySettings?: ImageDisplaySettings;
}

export interface ListMessage extends Message {
  type: "list";
  items: Item[];
  actions?: Action[];
}

export type MessageUnion =
  | ListMessage
  | CarouselMessage
  | LocationMessage
  | FileMessage
  | ImageMessage
  | TextMessage;

export interface AnalyticsTracking {
  adobeAnalytics: {
    experienceCloudVisitorId: string;
    regionId: string;
  };
}
