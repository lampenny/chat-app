# MSSGME - Chat app

A fully responsive Chat application. Features include search, reactions, threads, group messaging, built-in GIF support as well as the ability to edit and delete messages. Try it out:

    Username: nana

    Password: 123

<img width="1224" alt="Screen Shot 2022-01-28 at 11 38 20" src="https://user-images.githubusercontent.com/79977073/151477881-919906bc-4ab0-485e-8674-0ec15ecc0dab.png">

<img width="1217" alt="project2" src="https://user-images.githubusercontent.com/79977073/151477857-0cb350b1-98c1-44a8-adce-b883c556dd18.png">

# Overview
📁 For maintainability, folder structure has been organized according to this project size. As a personal project, `components & assets` are in it’s own folders but the components have not been destructured further.

🖌 CSS selector naming uses the BEM methodology (https://en.bem.info/methodology/). Block followed by underscores and the element (e.g. `channel-list__list__wrapper`) then modifiers.

⚙️ Uses functional components with the three most important components being:
`ChannelSearch`: async function that returns group messages and users in a dropdown menu.

`TeamChannelList`: custom component within the stream-chat-react component `ChannelList` which renders available group messages and direct messages in the `ChannelContainer`.

`TeamChannelPreview`: uses stream-chat-react custom hook, `useChatContext`, to get and display group messages and users. 

📎 Built using 3 dependencies: `stream-chat`, `stream-chat-react`, `universal-cookie`.

# Approach