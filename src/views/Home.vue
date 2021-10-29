<template>
  <div class="home">
    <div class="container-fluid mb-5">
      <div class="row">
        <div class="col-4 p-0">
          <img src="../assets/imgs/薩爾達傳說-曠野之息/1.jpeg">
        </div>
        <div class="col-4 p-0">
          <img src="../assets/imgs/薩爾達傳說-曠野之息/2.jpeg">
        </div>
        <div class="col-4 p-0">
          <img src="../assets/imgs/薩爾達傳說-曠野之息/4.jpeg">
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row mb-4">
        <div class="col-md-8 col-12">
          <h2 class="mb-1">作者自白</h2>
          <hr class="mt-0">
          <p v-for="(item, index) in description"
             :key="index"
             class="mb-4 letter-space-1">
             {{item}}
          </p>
        </div>
        <div class="col-md-4 col-12">
          <div class="row">
            <div class="col-6 col-md-12">
              <img class="img-fluid img-thumbnail mb-3"
                   src="../assets/imgs/薩爾達傳說-曠野之息/1.jpeg" alt="">
            </div>
            <div class="col-6 col-md-12">
              <img class="img-fluid img-thumbnail mb-3"
                   src="../assets/imgs/超級瑪利歐-奧德賽/1.jpeg" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="row mb-4">
        <div class="col-12">
          <h2 class="mb-1">開發感想</h2>
          <hr class="mt-0">
           <p v-for="(item, index) in experience"
             :key="index"
             class="mb-4 letter-space-1">
             {{item}}
          </p>
        </div>
      </div>
    </div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  data() {
    return {
      description: [
        'Switch問世後，因為《薩爾達傳說》以及《馬力歐奧德賽》的介紹影片入坑。作者現職前端工程師，藉由github page紀錄我玩遊戲的主觀感想。遊戲列表為我個人玩過的遊戲，根據遊戲的系統及設計初步分類。方便大家透過分類，進而找到接近自己想找的遊戲。',
        '我會對於我玩過的遊戲相當主觀的說明，內容上很有可能與大家差異甚遠，可能會因為期望或者系列有所偏頗，但與其像是各大評分網站一樣千篇一律介紹遊戲，個人主觀評斷遊戲更加具有參考價值意義。',
        '對我來說，遊戲就是製作者的傳達媒介，傳達的內容未必一定要相當沈重，也可以傳達好玩僅此而已。可以像懸疑劇情片那樣，案情撲朔迷離，思考到焦頭爛額，最後抽絲剝繭找到關鍵證物，整起案子頗雲見日；也可以像商業爽片一樣，簡單線性的劇情，爽快的動作場景，震撼的音效，震撼五官。',
      ],
      experience: [
        '非資工資管相關科系，在資策會前端班職訓期間，為了期末專題而接觸資料庫，又因為有看過從 google sheet API 將資料傳送到前端，因此想透過 google sheet API 以及 github page 整理喜歡的東西到網頁上紀錄。也當作一份個人作品持續更新。',
        '資料庫方面為了方便建立以及顯示清楚，會先以 google sheet 方便建立為主，欄位渲染等 API 傳送到前端再整理，大部分的整理判斷都在前端。畢竟 google sheet 不是專門的資料庫，資料取得都是陣列，因此如果要用物件形式在 Vue3 裡渲染，就必須對陣列處理轉成物件。',
        '前端方面導入了 bootstrap 5.0 格線系統，但為了個人練習，自我限制只使用 css 函式庫， bootstrap 所提供的各種元件全都不採用。取得 google sheet API 資料依靠 Axios 取得，於 Vue3 的生命週期整理資料再渲染網頁，並且再增加功能。跨頁面使用 Vue-Router 將畫面區分非同步更新。',
        '功能面雖然無法達到實務需求的水準，但會考量到使用者體驗，對畫面及功能精細處理，如果連自己用起來都不順，更何況交給別人。畫面設計簡單，將內容區分清楚，內容分開必須具有意義。資料也是認真建立，畢竟是紀錄給自己，沒道理搞得像交辦作業打卡上班，加入個人特色，不會搞得像教科書一般枯燥。',
        '「沒有完美的網站，只有時間到了必須交付而已。」算是個人製作這份網站的感想，為了使用者體感網頁已經更新，必須有適當的動畫。為了網頁只對資料庫取得一次資料，對於資料複製以及資料儲存概念也要有所著墨，同樣一個結果會有不同的路途可以抵達，如何乾淨漂亮又易於維護，我想是所有工程師所追求的目標。',
      ],
    };
  },
};
</script>

<style lang="scss">
  .letter-space-1{
    letter-spacing: 1px;
  }
  hr{
    background: #e60012;
  }
  .btn{
    background-color: #e60012 !important;
    color: #fff !important;
    &:hover{
      background-color: #fff !important;
      color: #111 !important;
      border: 1px solid #111;
    }
  }
  .mouse-link{
    cursor: pointer;
    span{
      text-decoration: underline;
      &:hover{
        text-decoration: none;
      }
    }
  }
  .mouse-arrow, body{
    cursor: default;
  }
</style>
