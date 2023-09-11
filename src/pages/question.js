import React from 'react'

//component
import AlternatingSumCalculator from '/components/q1.js'
import Lottery from '/components/q2.js'

export default function question() {
  return (
    <div>
    <AlternatingSumCalculator />
    <Lottery />
    <h2>Q4</h2>
    <div>
    App Component:

    這是整個應用的最高層元件，通常包含了整個聊天室的主要結構和全局狀態管理。
    ChatRoom Component:

    聊天室元件負責顯示聊天消息，包含以下子元件：
    <br></br>
    MessageList Component:
    用於顯示聊天消息的元件。
    可能包含多個 MessageItem Components，每個 MessageItem 代表一條消息。
    <br></br>
    MessageInput Component:
    用於輸入和發送新消息的元件
    FileAdd Component:
    用於新增檔案或照片、影片的元件
    <br></br>
    FileAdd Component:
    可能包含以下子元件:
        PhotoUpload Component、
        DataPreview Component:
        用於顯示用戶選擇的檔案預覽。
        UploadButton Component:
        用於觸發檔案上傳操作的按鈕。
    <br></br>
    PhotoUpload Component:
    包含以下子元件：
        PhotoPreview Component:
        用於顯示用戶選擇的照片預覽。
        UploadButton Component:
        用於觸發照片上傳操作的按鈕。
    <br></br>
    UserProfile Component:
    用於顯示當前用戶的個人檔案信息，例如頭像、名稱等。
    可能包含其他子元件，如 Avatar Component 用於顯示頭像。
    <br></br>
    Navbar Component:
    位於頂部，包含一些導航元素，如聊天室切換、用戶登出等功能、PhotoUpload Component
    這些元件之間的關係可能如下所示：
    <br></br>
    App Component 包含 ChatRoom Component、UserProfile Component 和 Navbar Component。
    ChatRoom Component 包含 MessageList Component 和 MessageInput Component。
    UserProfile Component 包含 Avatar Component。
    </div>
    <span>雖然不太一樣，但如果是類似的東西的話可以看github上做的論壇留言功能</span>
    </div>
  )
}
