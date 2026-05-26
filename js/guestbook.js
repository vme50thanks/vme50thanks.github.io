/* ===== Guestbook ===== */
const STORAGE_KEY = 'guestbook_messages';

function loadMessages() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch { return []; }
}

function saveMessages(msgs) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(msgs));
}

function formatTime(iso) {
  const d = new Date(iso);
  const pad = n => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

function renderMessages() {
  const container = document.getElementById('guestbook-messages');
  const msgs = loadMessages();

  if (msgs.length === 0) {
    container.innerHTML = `<div class="guestbook-empty">
      <span class="empty-icon">📭</span>还没有留言，来做第一个留下足迹的人吧~
    </div>`;
    return;
  }

  container.innerHTML = msgs.slice().reverse().map((m, i) => {
    const originalIndex = msgs.length - 1 - i;
    const escapedBody = m.body.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const escapedName = m.name.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return `<div class="message-card">
      <div class="msg-header">
        <span class="msg-author">🌸 ${escapedName}</span>
        <div style="display:flex;align-items:center;gap:10px;">
          <span class="msg-time">${formatTime(m.time)}</span>
          <button class="msg-delete" onclick="deleteMessage(${originalIndex})" title="删除">✕</button>
        </div>
      </div>
      <div class="msg-body">${escapedBody}</div>
    </div>`;
  }).join('');
}

function submitMessage() {
  const nameEl = document.getElementById('gb-name');
  const messageEl = document.getElementById('gb-message');
  const name = nameEl.value.trim();
  const body = messageEl.value.trim();

  if (!name) { alert('请填写昵称~'); nameEl.focus(); return; }
  if (!body) { alert('请写下你想说的话~'); messageEl.focus(); return; }

  const msgs = loadMessages();
  msgs.push({ name, body, time: new Date().toISOString() });
  saveMessages(msgs);

  nameEl.value = '';
  document.getElementById('gb-email').value = '';
  messageEl.value = '';
  renderMessages();
}

function deleteMessage(index) {
  if (!confirm('确定要删除这条留言吗？')) return;
  const msgs = loadMessages();
  msgs.splice(index, 1);
  saveMessages(msgs);
  renderMessages();
}

document.getElementById('gb-message').addEventListener('keydown', function(e) {
  if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
    e.preventDefault();
    submitMessage();
  }
});

renderMessages();
