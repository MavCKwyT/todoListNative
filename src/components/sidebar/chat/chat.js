export function chat() {
  const chatHTML = `<div class="sidebar-chat__header">
    <span class="sidebar-chat__header-name">Chat</span>
    <div class="sidebar-chat__users">
        <div class="sidebar-chat__user-lists">

        </div>
    </div>
</div>`;
  document.getElementById("sidebar__chat-container").innerHTML = chatHTML;
}

chat();
