# Thinkcrypt chatbot

One assistant answers on three channels: the chat bubble on www.thinkcrypt.dev, the Facebook Page (Messenger) and Instagram.
It runs on Claude Haiku 5.5 with Thinkcrypt's own Anthropic key, and it answers only from Thinkcrypt's own content.

## Where things live

| Piece | File |
| --- | --- |
| Brain: rules, Claude call, `save_lead` tool, 12-hour pause after a team reply | `lib/chatbot/bot.js` |
| What it knows, rebuilt every 5 minutes | `lib/chatbot/knowledge.js` |
| Saving chats in the Mint panel (server key) | `lib/chatbot/store.js` |
| Website chat endpoint | `app/api/chat/route.js` |
| Facebook / Instagram webhook | `app/api/meta/webhook/route.js` |
| Chat bubble and panel (mounted in `app/layout.js`) | `components/site/ChatWidget.js` |

The bot's knowledge comes from:

- the panel's **Chatbot knowledge** articles. Topic `rules` adds instructions. Turn an article off with **Active**.
- the Products list and Site setup contacts.
- the Easy Instant Commerce prices (`lib/easyCommerce.js`).
- Commerce OS live data from its own project: features, plans, build options and demo stores (`COMMERCE_OS_API*` in `.env`).

## In the Mint panel (Thinkcrypt Website project, sidebar: Chatbot)

- **Chat conversations**: one per person per channel, with a **Chat messages** tab.
  - Status is `open`, `lead` (they left a phone or email), `handover` (they want a person) or `closed` (the bot stays quiet).
  - Tick **Bot off** to stop the bot in one chat.
- **Chatbot knowledge**: what the bot knows. Edit it here and the change shows within 5 minutes.
- Automation **"Tell the team about chatbot leads"**: when a conversation becomes `lead` or `handover`, it notifies the team and emails connect@thinkcrypt.dev.

How the team takes over:

- **Facebook and Instagram:** reply from Meta Business Suite. The bot sees your reply and stays quiet in that chat for 12 hours.
- **Website chat:** replies can't be pushed back to the visitor. Contact them by the phone or email they left.

## Environment variables (Vercel project thinkcryptv2)

| Name | What | Needed for |
| --- | --- | --- |
| `ANTHROPIC_API_KEY` | Thinkcrypt's Anthropic key | all answers. Without it the bot sends a "the team will get back to you" message. |
| `MINT_SERVER_KEY` | already set | saving chats and reading the knowledge articles |
| `META_VERIFY_TOKEN` | any long random string you choose; type the same one into the Meta webhook setup | Facebook and Instagram |
| `META_APP_SECRET` | Meta app → App settings → Basic → App secret | checking that webhooks really come from Meta |
| `META_APP_ID` | the Meta app's id | telling the bot's own replies apart from the team's |
| `META_PAGE_ACCESS_TOKEN` | a long-lived Page token for the Thinkcrypt Page (with the Instagram account linked to the Page) | sending replies on Messenger and Instagram |
| `INSTAGRAM_ACCESS_TOKEN`, `INSTAGRAM_APP_SECRET` | optional: only when Instagram is connected through "Instagram API with Instagram Login" instead of the Page | Instagram |

Redeploy after adding them.

## Meta setup (once)

1. At developers.facebook.com, create an app of type **Business**. Add the **Messenger** product and **Instagram** (API setup with Facebook Login).
2. Under **Messenger → Settings**, generate a Page access token for the Thinkcrypt Page. Use the long-lived token in `META_PAGE_ACCESS_TOKEN`.
3. Set up the webhook:
   - Callback URL: `https://www.thinkcrypt.dev/api/meta/webhook`
   - Verify token: `META_VERIFY_TOKEN`
   - Subscribe the Page to `messages` and `message_echoes`.
   - Do the same for Instagram (`messages`, `message_echoes`).
4. In the Instagram app's settings, turn on **Allow access to messages** (Settings → Privacy → Messages → Connected tools).
5. Get the app ready to go live:
   - Ask for **Advanced access** to `pages_messaging`, `instagram_manage_messages` and `pages_show_list` in **App Review**.
   - Complete **Business Verification**.
   - Until both are approved, the bot only answers people who have a role on the app.
6. Switch the app to **Live**.

Meta only allows replies within 24 hours of the person's last message. The bot always answers right away, so this doesn't get in the way.

## Testing locally

`.env.local` with `MINT_SERVER_KEY` and `ANTHROPIC_API_KEY`, then `npx next dev -p 3611`.
Open the chat bubble. Messages show up in the panel under Chat conversations, channel `website`.
