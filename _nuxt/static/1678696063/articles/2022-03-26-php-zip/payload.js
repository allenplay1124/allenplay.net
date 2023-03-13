__NUXT_JSONP__("/articles/2022-03-26-php-zip", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ,aR,aS,aT,aU,aV,aW,aX,aY,aZ,a_,a$,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,by,bz,bA,bB,bC){return {data:[{postData:{slug:"2022-03-26-php-zip",title:"PHP 產生壓縮檔",summary:"在某些需求，如要讓使用者下載多個檔案時，我們可以打包成一個檔案供用戶下載，或是檔案太大，可以壓縮檔案已減少頻寛。",image:"\u002Fimages\u002Farticles\u002F2022-03-26-php-zip\u002Fcover.png",status:Y,pubDate:"2022-03-26T11:00:00.000Z",category:{slug:"pragram",title:"程式設計",type:"class",src:"\u002Fimages\u002Fslider\u002Fprogram.png",sort:1,toc:[],body:{type:M,children:[{type:b,tag:f,props:{},children:[{type:a,value:"分享各種程式設計的小技巧"}]}]},dir:"\u002Fcategories",path:"\u002Fcategories\u002Fpragram",extension:N,createdAt:Z,updatedAt:Z},tags:[{slug:R,title:R,toc:[],body:{type:M,children:[]},dir:"\u002Ftags",path:"\u002Ftags\u002Fphp",extension:N,createdAt:_,updatedAt:_}],toc:[{id:$,depth:l,text:aa},{id:ab,depth:l,text:ac},{id:ad,depth:l,text:ae}],body:{type:M,children:[{type:b,tag:m,props:{id:$},children:[{type:b,tag:h,props:{ariaHidden:n,href:"#%E9%9C%80%E6%B1%82",tabIndex:o},children:[{type:b,tag:d,props:{className:[p,q]},children:[]}]},{type:a,value:aa}]},{type:a,value:c},{type:b,tag:"ul",props:{},children:[{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"php5.2 以上版本"}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"安裝 zip 庫"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"以 "},{type:b,tag:i,props:{},children:[{type:a,value:af}]},{type:a,value:" 為例："}]},{type:a,value:c},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,O]},children:[{type:b,tag:i,props:{},children:[{type:b,tag:d,props:{className:[e,r]},children:[{type:a,value:ag}]},{type:a,value:B},{type:b,tag:d,props:{className:[e,r]},children:[{type:a,value:S}]},{type:a,value:" update\n"},{type:b,tag:d,props:{className:[e,r]},children:[{type:a,value:ag}]},{type:a,value:B},{type:b,tag:d,props:{className:[e,r]},children:[{type:a,value:S}]},{type:a,value:B},{type:b,tag:d,props:{className:[e,r]},children:[{type:a,value:T}]},{type:a,value:" -y php7.4-zip\n"}]}]}]},{type:a,value:c},{type:b,tag:m,props:{id:ab},children:[{type:b,tag:h,props:{ariaHidden:n,href:"#%E5%A3%93%E7%B8%AE%E7%AF%84%E4%BE%8B%E7%A8%8B%E5%BC%8F",tabIndex:o},children:[{type:b,tag:d,props:{className:[p,q]},children:[]}]},{type:a,value:ac}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:w,props:{},children:[{type:a,value:"產生壓縮檔"}]}]},{type:a,value:c},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,I]},children:[{type:b,tag:i,props:{},children:[{type:b,tag:d,props:{className:[e,R,I]},children:[{type:b,tag:d,props:{className:[e,"delimiter","important"]},children:[{type:a,value:"\u003C?php"}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,"comment"]},children:[{type:a,value:"\u002F\u002Fnew ZipArchive 物件"}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,k]},children:[{type:a,value:C}]},{type:a,value:B},{type:b,tag:d,props:{className:[e,D]},children:[{type:a,value:ah}]},{type:a,value:B},{type:b,tag:d,props:{className:[e,ai]},children:[{type:a,value:aj}]},{type:a,value:B},{type:b,tag:d,props:{className:[e,ak]},children:[{type:a,value:U}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:E}]},{type:a,value:al},{type:b,tag:d,props:{className:[e,k]},children:[{type:a,value:C}]},{type:b,tag:d,props:{className:[e,D]},children:[{type:a,value:G}]},{type:b,tag:d,props:{className:[e,r]},children:[{type:a,value:am}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:H}]},{type:b,tag:d,props:{className:[e,an,"single-quoted-string"]},children:[{type:a,value:"'new.zip'"}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:P}]},{type:a,value:B},{type:b,tag:d,props:{className:[e,"scope"]},children:[{type:a,value:U},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:"::"}]}]},{type:b,tag:d,props:{className:[e,"constant"]},children:[{type:a,value:"CREATE"}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:F}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:E}]},{type:a,value:al}]}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"其中 "},{type:b,tag:i,props:{},children:[{type:a,value:"$zip-\u003Eopen()"}]},{type:a,value:" 第一參數為要產壓縮檔路徑"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"第二參數為產生檔案的模式"}]},{type:a,value:c},{type:b,tag:J,props:{},children:[{type:a,value:c},{type:b,tag:j,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:"ZipArchive::CREATE"}]},{type:a,value:"：產生新檔案"}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:"ZipArchive::OVERWRITE"}]},{type:a,value:": 若壓縮檔存在，則覆蓋檔案"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:w,props:{},children:[{type:a,value:"加入一個空資料夾"}]}]},{type:a,value:c},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,I]},children:[{type:b,tag:i,props:{},children:[{type:b,tag:d,props:{className:[e,k]},children:[{type:a,value:C}]},{type:b,tag:d,props:{className:[e,D]},children:[{type:a,value:G}]},{type:b,tag:d,props:{className:[e,r]},children:[{type:a,value:"addEmptyDir"}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:H}]},{type:b,tag:d,props:{className:[e,k]},children:[{type:a,value:ao}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:F}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:E}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:L}]},{type:a,value:c},{type:b,tag:J,props:{},children:[{type:a,value:c},{type:b,tag:j,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:ao}]},{type:a,value:" 資料夾名稱"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:w,props:{},children:[{type:a,value:"將檔案加入壓縮檔"}]}]},{type:a,value:c},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,I]},children:[{type:b,tag:i,props:{},children:[{type:b,tag:d,props:{className:[e,k]},children:[{type:a,value:C}]},{type:b,tag:d,props:{className:[e,D]},children:[{type:a,value:G}]},{type:b,tag:d,props:{className:[e,r]},children:[{type:a,value:"addaddFile"}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:H}]},{type:b,tag:d,props:{className:[e,k]},children:[{type:a,value:Q}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:P}]},{type:a,value:B},{type:b,tag:d,props:{className:[e,k]},children:[{type:a,value:ap}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:F}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:E}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:L}]},{type:a,value:c},{type:b,tag:J,props:{},children:[{type:a,value:c},{type:b,tag:j,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:Q}]},{type:a,value:" 為檔案路徑"}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:ap}]},{type:a,value:" 重新命名 (選填)"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:w,props:{},children:[{type:a,value:"將字串加入文字檔並壓縮"}]}]},{type:a,value:c},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,I]},children:[{type:b,tag:i,props:{},children:[{type:b,tag:d,props:{className:[e,k]},children:[{type:a,value:C}]},{type:b,tag:d,props:{className:[e,D]},children:[{type:a,value:G}]},{type:b,tag:d,props:{className:[e,r]},children:[{type:a,value:"addFromString"}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:H}]},{type:b,tag:d,props:{className:[e,k]},children:[{type:a,value:aq}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:P}]},{type:a,value:B},{type:b,tag:d,props:{className:[e,k]},children:[{type:a,value:ar}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:F}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:E}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:L}]},{type:a,value:c},{type:b,tag:J,props:{},children:[{type:a,value:c},{type:b,tag:j,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:aq}]},{type:a,value:" 檔案名稱"}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:ar}]},{type:a,value:" 文字內容"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:w,props:{},children:[{type:a,value:"依索引刪除檔案"}]}]},{type:a,value:c},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,I]},children:[{type:b,tag:i,props:{},children:[{type:b,tag:d,props:{className:[e,k]},children:[{type:a,value:C}]},{type:b,tag:d,props:{className:[e,D]},children:[{type:a,value:G}]},{type:b,tag:d,props:{className:[e,r]},children:[{type:a,value:"deleteIndex"}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:H}]},{type:b,tag:d,props:{className:[e,k]},children:[{type:a,value:as}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:F}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:E}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:L}]},{type:a,value:c},{type:b,tag:J,props:{},children:[{type:a,value:c},{type:b,tag:j,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:as}]},{type:a,value:" 刪除索引的檔案"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:w,props:{},children:[{type:a,value:"依檔名刪除檔案"}]}]},{type:a,value:c},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,I]},children:[{type:b,tag:i,props:{},children:[{type:b,tag:d,props:{className:[e,k]},children:[{type:a,value:C}]},{type:b,tag:d,props:{className:[e,D]},children:[{type:a,value:G}]},{type:b,tag:d,props:{className:[e,r]},children:[{type:a,value:"deleteName"}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:H}]},{type:b,tag:d,props:{className:[e,k]},children:[{type:a,value:at}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:F}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:E}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:L}]},{type:a,value:c},{type:b,tag:J,props:{},children:[{type:a,value:c},{type:b,tag:j,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:at}]},{type:a,value:" 刪除檔案名稱"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:w,props:{},children:[{type:a,value:"更改檔名"}]}]},{type:a,value:c},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,I]},children:[{type:b,tag:i,props:{},children:[{type:b,tag:d,props:{className:[e,k]},children:[{type:a,value:C}]},{type:b,tag:d,props:{className:[e,D]},children:[{type:a,value:G}]},{type:b,tag:d,props:{className:[e,r]},children:[{type:a,value:"renameName"}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:H}]},{type:b,tag:d,props:{className:[e,k]},children:[{type:a,value:au}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:P}]},{type:a,value:B},{type:b,tag:d,props:{className:[e,k]},children:[{type:a,value:av}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:F}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:E}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:L}]},{type:a,value:c},{type:b,tag:J,props:{},children:[{type:a,value:c},{type:b,tag:j,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:au}]},{type:a,value:" 原本檔名"}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:av}]},{type:a,value:" 新檔名"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:w,props:{},children:[{type:a,value:"關閉壓縮檔"}]}]},{type:a,value:c},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,I]},children:[{type:b,tag:i,props:{},children:[{type:b,tag:d,props:{className:[e,k]},children:[{type:a,value:C}]},{type:b,tag:d,props:{className:[e,D]},children:[{type:a,value:G}]},{type:b,tag:d,props:{className:[e,r]},children:[{type:a,value:aw}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:H}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:F}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:E}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:m,props:{id:ad},children:[{type:b,tag:h,props:{ariaHidden:n,href:"#%E8%A7%A3%E5%A3%93%E7%B8%AE%E7%A8%8B%E5%BC%8F",tabIndex:o},children:[{type:b,tag:d,props:{className:[p,q]},children:[]}]},{type:a,value:ae}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:w,props:{},children:[{type:a,value:"範例程式"}]}]},{type:a,value:c},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,I]},children:[{type:b,tag:i,props:{},children:[{type:b,tag:d,props:{className:[e,k]},children:[{type:a,value:C}]},{type:a,value:B},{type:b,tag:d,props:{className:[e,D]},children:[{type:a,value:ah}]},{type:a,value:B},{type:b,tag:d,props:{className:[e,ai]},children:[{type:a,value:aj}]},{type:a,value:B},{type:b,tag:d,props:{className:[e,ak]},children:[{type:a,value:U}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:E}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,k]},children:[{type:a,value:C}]},{type:b,tag:d,props:{className:[e,D]},children:[{type:a,value:G}]},{type:b,tag:d,props:{className:[e,r]},children:[{type:a,value:am}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:H}]},{type:b,tag:d,props:{className:[e,k]},children:[{type:a,value:ax}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:F}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:E}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,k]},children:[{type:a,value:C}]},{type:b,tag:d,props:{className:[e,D]},children:[{type:a,value:G}]},{type:b,tag:d,props:{className:[e,r]},children:[{type:a,value:"extractTo"}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:H}]},{type:b,tag:d,props:{className:[e,k]},children:[{type:a,value:Q}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:F}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:E}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,k]},children:[{type:a,value:C}]},{type:b,tag:d,props:{className:[e,D]},children:[{type:a,value:G}]},{type:b,tag:d,props:{className:[e,r]},children:[{type:a,value:aw}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:H}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:F}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:E}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:w,props:{},children:[{type:a,value:L}]}]},{type:a,value:c},{type:b,tag:J,props:{},children:[{type:a,value:c},{type:b,tag:j,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:ax}]},{type:a,value:" 壓縮檔位置"}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:Q}]},{type:a,value:" 解壓縮檔路徑"}]},{type:a,value:c}]}]},dir:ay,path:"\u002Farticles\u002F2022-03-26-php-zip",extension:N,createdAt:az,updatedAt:az},perv:null,next:{slug:"2022-04-10-mac-os-tool",title:"大推！MacOS 上好用軟體集",summary:"這裡收集了，站長在 MacOS 上常用的軟體",image:"\u002Fimages\u002Farticles\u002F2022-04-10-mas-os-tool\u002Fcover.png",status:Y,pubDate:"2022-04-10T12:00:00.000Z",category:aA,tags:["macos",aA],toc:[{id:aB,depth:l,text:aC},{id:aD,depth:l,text:V},{id:aE,depth:l,text:aF},{id:aG,depth:l,text:aH},{id:aI,depth:l,text:aJ},{id:aK,depth:l,text:W},{id:aL,depth:l,text:X},{id:aM,depth:l,text:aN},{id:aO,depth:l,text:aP},{id:aQ,depth:l,text:aR},{id:aS,depth:l,text:aT},{id:aU,depth:l,text:aV},{id:aW,depth:l,text:aX},{id:aY,depth:l,text:aZ},{id:a_,depth:l,text:a$},{id:ba,depth:l,text:bb}],body:{type:M,children:[{type:b,tag:m,props:{id:aB},children:[{type:b,tag:h,props:{href:"#homebrew",ariaHidden:n,tabIndex:o},children:[{type:b,tag:d,props:{className:[p,q]},children:[]}]},{type:a,value:aC}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"MacOS 上的套件管理，類似 "},{type:b,tag:w,props:{},children:[{type:a,value:af}]},{type:a,value:bc},{type:b,tag:i,props:{},children:[{type:a,value:S}]},{type:a,value:" 或是 "},{type:b,tag:w,props:{},children:[{type:a,value:"CentOS"}]},{type:a,value:bc},{type:b,tag:i,props:{},children:[{type:a,value:"yum"}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:K},{type:b,tag:h,props:{href:bd,rel:[s,t,u],target:v},children:[{type:a,value:bd}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"安裝方式："}]},{type:a,value:c},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[O,A]},children:[{type:b,tag:i,props:{},children:[{type:a,value:"\u002Fbin\u002Fbash -c "},{type:b,tag:d,props:{className:[e,an]},children:[{type:a,value:be},{type:b,tag:d,props:{className:[e,k]},children:[{type:b,tag:d,props:{className:[e,k]},children:[{type:a,value:"$("}]},{type:b,tag:d,props:{className:[e,r]},children:[{type:a,value:"curl"}]},{type:a,value:" -fsSL https:\u002F\u002Fraw.githubusercontent.com\u002FHomebrew\u002Finstall\u002FHEAD\u002Finstall.sh"},{type:b,tag:d,props:{className:[e,k]},children:[{type:a,value:F}]}]},{type:a,value:be}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:m,props:{id:aD},children:[{type:b,tag:h,props:{href:"#iterm2",ariaHidden:n,tabIndex:o},children:[{type:b,tag:d,props:{className:[p,q]},children:[]}]},{type:a,value:V}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"雖然MacOS有內建terminal，但 "},{type:b,tag:i,props:{},children:[{type:a,value:V}]},{type:a,value:"更加強大，再加上 "},{type:b,tag:i,props:{},children:[{type:a,value:"zsh"}]},{type:a,value:"，真得是開發者必裝軟體"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:K},{type:b,tag:h,props:{href:bf,rel:[s,t,u],target:v},children:[{type:a,value:bf}]}]},{type:a,value:c},{type:b,tag:m,props:{id:aE},children:[{type:b,tag:h,props:{href:"#stats",ariaHidden:n,tabIndex:o},children:[{type:b,tag:d,props:{className:[p,q]},children:[]}]},{type:a,value:aF}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"好用且"},{type:b,tag:w,props:{},children:[{type:a,value:"免費開源"}]},{type:a,value:"的硬體監測軟體，可即時監測以下硬體資訊"}]},{type:a,value:c},{type:b,tag:J,props:{},children:[{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"CPU"}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"RAM"}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"GPU"}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"DISK"}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"溫度"}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"網路使用狀況"}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"電池"}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"藍芽"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:bg},{type:b,tag:h,props:{href:bh,rel:[s,t,u],target:v},children:[{type:a,value:bh}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:bi}]},{type:a,value:c},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[O,A]},children:[{type:b,tag:i,props:{},children:[{type:a,value:bj},{type:b,tag:d,props:{className:[e,r]},children:[{type:a,value:T}]},{type:a,value:" --cask stats\n"}]}]}]},{type:a,value:c},{type:b,tag:m,props:{id:aG},children:[{type:b,tag:h,props:{href:"#xnip",ariaHidden:n,tabIndex:o},children:[{type:b,tag:d,props:{className:[p,q]},children:[]}]},{type:a,value:aH}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"是 MacOS 上相當好的螢幕截圖，功能如下："}]},{type:a,value:c},{type:b,tag:J,props:{},children:[{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"區域截圖"}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"視窗截圖"}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"捲動截圖 (截圖網頁時，超好用 👍)"}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"截圖標示 (可標示矩形、圓形、直線、鉛筆、馬賽克、文字、序號、高亮區塊等)"}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"釘選螢幕 (可在截圖後，將圖片釘在螢幕上)"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"另外也可付費解鎖更完整的功能"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:bk},{type:b,tag:h,props:{href:bl,rel:[s,t,u],target:v},children:[{type:a,value:bl}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:bm},{type:b,tag:h,props:{href:bn,rel:[s,t,u],target:v},children:[{type:a,value:bn}]}]},{type:a,value:c},{type:b,tag:m,props:{id:aI},children:[{type:b,tag:h,props:{href:"#couleurs",ariaHidden:n,tabIndex:o},children:[{type:b,tag:d,props:{className:[p,q]},children:[]}]},{type:a,value:aJ}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"這是一款簡單免費的螢幕選色器，操作上相當直覺。"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:bk},{type:b,tag:h,props:{href:bo,rel:[s,t,u],target:v},children:[{type:a,value:bo}]}]},{type:a,value:c},{type:b,tag:m,props:{id:aK},children:[{type:b,tag:h,props:{href:"#mos",ariaHidden:n,tabIndex:o},children:[{type:b,tag:d,props:{className:[p,q]},children:[]}]},{type:a,value:W}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Apple 觸控板真得很好用，但當你改用滑鼠時，就會讓你感到非常悲劇，那悲催的卡頓感，真得讓人很崩潰，而 "},{type:b,tag:w,props:{},children:[{type:a,value:W}]},{type:a,value:" 就可以改善，滑鼠在MacOS上的使用體驗。"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:K},{type:b,tag:h,props:{href:bp,rel:[s,t,u],target:v},children:[{type:a,value:bp}]}]},{type:a,value:c},{type:b,tag:m,props:{id:aL},children:[{type:b,tag:h,props:{href:"#appcleaner",ariaHidden:n,tabIndex:o},children:[{type:b,tag:d,props:{className:[p,q]},children:[]}]},{type:a,value:X}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"MacOS 在軟體解除安裝，一般是進到 "},{type:b,tag:w,props:{},children:[{type:a,value:"應用程式"}]},{type:a,value:" 目錄程式中，直接刪除軟體即可，但必竟每個軟體設計都不同，常常刪除不乾淨，而 "},{type:b,tag:i,props:{},children:[{type:a,value:X}]},{type:a,value:" 就可以很好的解決此問題。"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:K},{type:b,tag:h,props:{href:bq,rel:[s,t,u],target:v},children:[{type:a,value:bq}]}]},{type:a,value:c},{type:b,tag:m,props:{id:aM},children:[{type:b,tag:h,props:{href:"#iina",ariaHidden:n,tabIndex:o},children:[{type:b,tag:d,props:{className:[p,q]},children:[]}]},{type:a,value:aN}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"MacOS上強大好用的影音播放器，支援大部分的影音格式播放，不用在額外安裝各種編碼器，這個播放器一個搞定。"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:K},{type:b,tag:h,props:{href:br,rel:[s,t,u],target:v},children:[{type:a,value:br}]}]},{type:a,value:c},{type:b,tag:m,props:{id:aO},children:[{type:b,tag:h,props:{href:"#hidden-bar",ariaHidden:n,tabIndex:o},children:[{type:b,tag:d,props:{className:[p,q]},children:[]}]},{type:a,value:aP}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"當裝愈來愈多常駐軟體，就會發現上方系統列的ICON愈來愈多，而這個軟體可以暫時隱藏ICON，要用到時可隨時展開"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:bg},{type:b,tag:h,props:{href:bs,rel:[s,t,u],target:v},children:[{type:a,value:bs}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:bm},{type:b,tag:h,props:{href:bt,rel:[s,t,u],target:v},children:[{type:a,value:bt}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:bi}]},{type:a,value:c},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[O,A]},children:[{type:b,tag:i,props:{},children:[{type:a,value:bj},{type:b,tag:d,props:{className:[e,r]},children:[{type:a,value:T}]},{type:a,value:" --cask hiddenbar\n"}]}]}]},{type:a,value:c},{type:b,tag:m,props:{id:aQ},children:[{type:b,tag:h,props:{href:"#visual-studio-code",ariaHidden:n,tabIndex:o},children:[{type:b,tag:d,props:{className:[p,q]},children:[]}]},{type:a,value:aR}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"目前在程式開發上，站長使用的程式碼編輯器，擁有各類插件，可以加快開發速度。"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:K},{type:b,tag:h,props:{href:bu,rel:[s,t,u],target:v},children:[{type:a,value:bu}]}]},{type:a,value:c},{type:b,tag:m,props:{id:aS},children:[{type:b,tag:h,props:{href:"#textmate",ariaHidden:n,tabIndex:o},children:[{type:b,tag:d,props:{className:[p,q]},children:[]}]},{type:a,value:aT}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"雖雖 vscode 很強大，但有時讓人覺得有點肥大，若只是臨時要編輯文字檔，我會用這款輕量編輯器"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:K},{type:b,tag:h,props:{href:bv,rel:[s,t,u],target:v},children:[{type:a,value:bv}]}]},{type:a,value:c},{type:b,tag:m,props:{id:aU},children:[{type:b,tag:h,props:{href:"#keka-%E5%A3%93%E7%B8%AE%E8%BB%9F%E9%AB%94",ariaHidden:n,tabIndex:o},children:[{type:b,tag:d,props:{className:[p,q]},children:[]}]},{type:a,value:aV}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"這是 MacOS 我用過最好用的壓縮軟體，支援多種壓縮格式，密碼保護，分片壓縮等功能，其中最棒是可「排除 MacOS 資源檔」檔的功能。"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"在以往直接在 MacOS 打包壓縮的檔案，在 Windows 環境下打開，總會多出一些讓使用者迷惑的檔案，而這個功能就會幫忙先排除這檔案。"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:K},{type:b,tag:h,props:{href:bw,rel:[s,t,u],target:v},children:[{type:a,value:bw}]}]},{type:a,value:c},{type:b,tag:m,props:{id:aW},children:[{type:b,tag:h,props:{href:"#shottr",ariaHidden:n,tabIndex:o},children:[{type:b,tag:d,props:{className:[p,q]},children:[]}]},{type:a,value:aX}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"另一款螢幕截圖軟體，除了一般截圖功能、馬賽克、OCR、釘圖、螢幕選色器 等功能。"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:K},{type:b,tag:h,props:{href:bx,rel:[s,t,u],target:v},children:[{type:a,value:bx}]}]},{type:a,value:c},{type:b,tag:m,props:{id:aY},children:[{type:b,tag:h,props:{href:"#betterdisplay",ariaHidden:n,tabIndex:o},children:[{type:b,tag:d,props:{className:[p,q]},children:[]}]},{type:a,value:aZ}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"MacOS 對於外接螢幕，相當不友善，無法用熱健去控制外接螢幕的亮度和音量，而 BetterDisplay 則可以解決這些問題。"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:K},{type:b,tag:h,props:{href:by,rel:[s,t,u],target:v},children:[{type:a,value:by}]}]},{type:a,value:c},{type:b,tag:m,props:{id:a_},children:[{type:b,tag:h,props:{href:"#utm",ariaHidden:n,tabIndex:o},children:[{type:b,tag:d,props:{className:[p,q]},children:[]}]},{type:a,value:a$}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"支援 M1 晶片的虛擬機，除了以接近本機的速度在Apple Silicon上運行ARM64操作系統，在英特爾 Mac 上，x86\u002Fx64 作業系統可以虛擬化。"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:bz},{type:b,tag:h,props:{href:bA,rel:[s,t,u],target:v},children:[{type:a,value:bA}]}]},{type:a,value:c},{type:b,tag:m,props:{id:ba},children:[{type:b,tag:h,props:{href:"#raycast",ariaHidden:n,tabIndex:o},children:[{type:b,tag:d,props:{className:[p,q]},children:[]}]},{type:a,value:bb}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"一款能大幅提升你工作效率的 Mac 軟體，可以取代 Spotlight，且功能更加狂大。"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:bz},{type:b,tag:h,props:{href:bB,rel:[s,t,u],target:v},children:[{type:a,value:bB}]}]}]},dir:ay,path:"\u002Farticles\u002F2022-04-10-mac-os-tool",extension:N,createdAt:bC,updatedAt:bC}}],fetch:{},mutations:[]}}("text","element","\n","span","token","p","punctuation","a","code","li","variable",2,"h2","true",-1,"icon","icon-link","function","nofollow","noopener","noreferrer","_blank","strong","div","nuxt-content-highlight","pre","line-numbers"," ","$zip","operator",";",")","-\u003E","(","language-php","ol","官網：","參數說明","root",".md","language-bash",",","$filePath","php","apt","install","ZipArchive","iTerm2","Mos","AppCleaner",true,"2023-02-26T12:40:11.444Z","2023-02-26T12:40:11.445Z","e6cefb85dc60e5c9c0d7d804f85f6572","需求","e251a2c33f23dee6ff437af1ed3d3325","壓縮範例程式","5a3643485e77979c4ff3e61ceafae929","解壓縮程式","Ubuntu","sudo","=","keyword","new","class-name","\n\n","open","string","$dirname","$newFileName","$filename","$content","$index","$name","$oldName","$newName","close","$zipFile","\u002Farticles","2023-02-27T14:42:33.874Z","software","homebrew","HomeBrew","iterm2","stats","Stats","xnip","Xnip","couleurs","Couleurs","mos","appcleaner","iina","IINA","hidden-bar","Hidden Bar","visual-studio-code","Visual Studio Code","textmate","TextMate","keka-壓縮軟體","KeKa 壓縮軟體","shottr","Shottr","betterdisplay","BetterDisplay","utm","UTM","raycast","Raycast"," 上的 ","https:\u002F\u002Fbrew.sh","\"","https:\u002F\u002Fiterm2.com\u002F","下載位置： ","https:\u002F\u002Fgithub.com\u002Fexelban\u002Fstats\u002Freleases","HomeBrew 安裝","brew ","官網： ","http:\u002F\u002Fxnipapp.com\u002F","App Store：","https:\u002F\u002Fapps.apple.com\u002Fus\u002Fapp\u002Fxnip\u002Fid1221250572?mt=12","https:\u002F\u002Fcouleursapp.com\u002F","https:\u002F\u002Fmos.caldis.me\u002F","https:\u002F\u002Ffreemacsoft.net\u002Fappcleaner\u002F","https:\u002F\u002Fiina.io\u002F","https:\u002F\u002Fgithub.com\u002Fdwarvesf\u002Fhidden\u002Freleases","https:\u002F\u002Fapps.apple.com\u002Ftw\u002Fapp\u002Fhidden-bar\u002F","https:\u002F\u002Fcode.visualstudio.com\u002F","https:\u002F\u002Fmacromates.com\u002F","https:\u002F\u002Fwww.keka.io\u002F","https:\u002F\u002Fshottr.cc\u002F","https:\u002F\u002Fgithub.com\u002Fwaydabber\u002FBetterDisplay","網址：","https:\u002F\u002Fmac.getutm.app\u002F","https:\u002F\u002Fwww.raycast.com\u002F","2023-02-27T15:53:50.374Z")));