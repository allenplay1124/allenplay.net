__NUXT_JSONP__("/articles/2022-03-26-php-zip", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE){ar.slug=_;ar.title="程式設計";ar.cover="\u002Fimages\u002Fcategories\u002Fprogram.png";ar.sort=as;ar.summary=at;ar.toc=[];ar.body={type:j,children:[{type:b,tag:i,props:{},children:[{type:a,value:at}]}]};ar.dir=E;ar.path="\u002Fcategories\u002Fprogram";ar.extension=k;ar.createdAt=G;ar.updatedAt=G;au.slug=J;au.title=J;au.toc=[];au.body={type:j,children:[]};au.dir=r;au.path="\u002Ftags\u002Fphp";au.extension=k;au.createdAt=H;au.updatedAt=H;return {data:[{post:{slug:"2022-03-26-php-zip",title:"PHP 產生壓縮檔",summary:"在某些需求，如要讓使用者下載多個檔案時，我們可以打包成一個檔案供用戶下載，或是檔案太大，可以壓縮檔案已減少頻寛。",image:"\u002Fimages\u002Farticles\u002F2022-03-26-php-zip\u002Fcover.png",status:true,pubDate:"2022-03-26T11:00:00.000Z",category:_,tags:[J],toc:[{id:K,depth:R,text:K},{id:L,depth:R,text:L},{id:M,depth:R,text:M}],body:{type:j,children:[{type:b,tag:S,props:{id:K},children:[{type:b,tag:T,props:{ariaHidden:U,href:"#%E9%9C%80%E6%B1%82",tabIndex:V},children:[{type:b,tag:c,props:{className:[W,X]},children:[]}]},{type:a,value:K}]},{type:a,value:e},{type:b,tag:"ul",props:{},children:[{type:a,value:e},{type:b,tag:m,props:{},children:[{type:a,value:"php5.2 以上版本"}]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:a,value:"安裝 zip 庫"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"以 "},{type:b,tag:g,props:{},children:[{type:a,value:"Ubuntu"}]},{type:a,value:" 為例："}]},{type:a,value:e},{type:b,tag:v,props:{className:[w]},children:[{type:b,tag:x,props:{className:[y,"language-bash"]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:$}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:aa}]},{type:a,value:" update\n"},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:$}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:aa}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"install"}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,"parameter",h]},children:[{type:a,value:"-y"}]},{type:a,value:" php7.4-zip\n"}]}]}]},{type:a,value:e},{type:b,tag:S,props:{id:L},children:[{type:b,tag:T,props:{ariaHidden:U,href:"#%E5%A3%93%E7%B8%AE%E7%AF%84%E4%BE%8B%E7%A8%8B%E5%BC%8F",tabIndex:V},children:[{type:b,tag:c,props:{className:[W,X]},children:[]}]},{type:a,value:L}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:b,tag:z,props:{},children:[{type:a,value:"產生壓縮檔"}]}]},{type:a,value:e},{type:b,tag:v,props:{className:[w]},children:[{type:b,tag:x,props:{className:[y,A]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,J,A]},children:[{type:b,tag:c,props:{className:[d,"delimiter","important"]},children:[{type:a,value:"\u003C?php"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,"comment"]},children:[{type:a,value:"\u002F\u002Fnew ZipArchive 物件"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:o}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:ab}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,ac]},children:[{type:a,value:ad}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,ae]},children:[{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:q}]},{type:a,value:af},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:ag}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,"string","single-quoted-string"]},children:[{type:a,value:"'new.zip'"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:N}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,"scope"]},children:[{type:a,value:Y},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"::"}]}]},{type:b,tag:c,props:{className:[d,"constant"]},children:[{type:a,value:"CREATE"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:q}]},{type:a,value:af}]}]}]}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"其中 "},{type:b,tag:g,props:{},children:[{type:a,value:"$zip-\u003Eopen()"}]},{type:a,value:" 第一參數為要產壓縮檔路徑"}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"第二參數為產生檔案的模式"}]},{type:a,value:e},{type:b,tag:B,props:{},children:[{type:a,value:e},{type:b,tag:m,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"ZipArchive::CREATE"}]},{type:a,value:"：產生新檔案"}]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"ZipArchive::OVERWRITE"}]},{type:a,value:": 若壓縮檔存在，則覆蓋檔案"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:b,tag:z,props:{},children:[{type:a,value:"加入一個空資料夾"}]}]},{type:a,value:e},{type:b,tag:v,props:{className:[w]},children:[{type:b,tag:x,props:{className:[y,A]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"addEmptyDir"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ah}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:q}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:C}]},{type:a,value:e},{type:b,tag:B,props:{},children:[{type:a,value:e},{type:b,tag:m,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:ah}]},{type:a,value:" 資料夾名稱"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:b,tag:z,props:{},children:[{type:a,value:"將檔案加入壓縮檔"}]}]},{type:a,value:e},{type:b,tag:v,props:{className:[w]},children:[{type:b,tag:x,props:{className:[y,A]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"addaddFile"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:N}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ai}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:q}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:C}]},{type:a,value:e},{type:b,tag:B,props:{},children:[{type:a,value:e},{type:b,tag:m,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:O}]},{type:a,value:" 為檔案路徑"}]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:ai}]},{type:a,value:" 重新命名 (選填)"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:b,tag:z,props:{},children:[{type:a,value:"將字串加入文字檔並壓縮"}]}]},{type:a,value:e},{type:b,tag:v,props:{className:[w]},children:[{type:b,tag:x,props:{className:[y,A]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"addFromString"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:aj}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:N}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ak}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:q}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:C}]},{type:a,value:e},{type:b,tag:B,props:{},children:[{type:a,value:e},{type:b,tag:m,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:aj}]},{type:a,value:" 檔案名稱"}]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:ak}]},{type:a,value:" 文字內容"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:b,tag:z,props:{},children:[{type:a,value:"依索引刪除檔案"}]}]},{type:a,value:e},{type:b,tag:v,props:{className:[w]},children:[{type:b,tag:x,props:{className:[y,A]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"deleteIndex"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:al}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:q}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:C}]},{type:a,value:e},{type:b,tag:B,props:{},children:[{type:a,value:e},{type:b,tag:m,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:al}]},{type:a,value:" 刪除索引的檔案"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:b,tag:z,props:{},children:[{type:a,value:"依檔名刪除檔案"}]}]},{type:a,value:e},{type:b,tag:v,props:{className:[w]},children:[{type:b,tag:x,props:{className:[y,A]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"deleteName"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:am}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:q}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:C}]},{type:a,value:e},{type:b,tag:B,props:{},children:[{type:a,value:e},{type:b,tag:m,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:am}]},{type:a,value:" 刪除檔案名稱"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:b,tag:z,props:{},children:[{type:a,value:"更改檔名"}]}]},{type:a,value:e},{type:b,tag:v,props:{className:[w]},children:[{type:b,tag:x,props:{className:[y,A]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"renameName"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:an}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:N}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ao}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:q}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:C}]},{type:a,value:e},{type:b,tag:B,props:{},children:[{type:a,value:e},{type:b,tag:m,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:an}]},{type:a,value:" 原本檔名"}]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:ao}]},{type:a,value:" 新檔名"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:b,tag:z,props:{},children:[{type:a,value:"關閉壓縮檔"}]}]},{type:a,value:e},{type:b,tag:v,props:{className:[w]},children:[{type:b,tag:x,props:{className:[y,A]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:ap}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:q}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:S,props:{id:M},children:[{type:b,tag:T,props:{ariaHidden:U,href:"#%E8%A7%A3%E5%A3%93%E7%B8%AE%E7%A8%8B%E5%BC%8F",tabIndex:V},children:[{type:b,tag:c,props:{className:[W,X]},children:[]}]},{type:a,value:M}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:b,tag:z,props:{},children:[{type:a,value:"範例程式"}]}]},{type:a,value:e},{type:b,tag:v,props:{className:[w]},children:[{type:b,tag:x,props:{className:[y,A]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:o}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:ab}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,ac]},children:[{type:a,value:ad}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,ae]},children:[{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:q}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:ag}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:aq}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:q}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"extractTo"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:q}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:ap}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:q}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:b,tag:z,props:{},children:[{type:a,value:C}]}]},{type:a,value:e},{type:b,tag:B,props:{},children:[{type:a,value:e},{type:b,tag:m,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:aq}]},{type:a,value:" 壓縮檔位置"}]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:O}]},{type:a,value:" 解壓縮檔路徑"}]},{type:a,value:e}]}]},dir:"\u002Farticles",path:"\u002Farticles\u002F2022-03-26-php-zip",extension:k,createdAt:"2025-01-22T10:21:45.220Z",updatedAt:"2025-01-22T10:21:45.221Z",categoryData:ar,tagsData:[au]},categories:[ar,{slug:Z,title:"軟體",cover:"\u002Fimages\u002Fcategories\u002Fsoftware.png",sort:as,summary:av,toc:[],body:{type:j,children:[{type:b,tag:i,props:{},children:[{type:a,value:av}]}]},dir:E,path:"\u002Fcategories\u002Fsoftware",extension:k,createdAt:G,updatedAt:D},{slug:"frontend",title:"前端",cover:"\u002Fimages\u002Fcategories\u002Ffront-end.png",sort:3,summary:aw,toc:[],body:{type:j,children:[{type:b,tag:i,props:{},children:[{type:a,value:aw}]}]},dir:E,path:"\u002Fcategories\u002Ffrontend",extension:k,createdAt:D,updatedAt:D},{slug:"database",title:"資料庫",cover:"\u002Fimages\u002Fcategories\u002Fdatabase.png",sort:4,summary:ax,toc:[],body:{type:j,children:[{type:b,tag:i,props:{},children:[{type:a,value:ax}]}]},dir:E,path:"\u002Fcategories\u002Fdatabase",extension:k,createdAt:D,updatedAt:D},{slug:ay,title:az,cover:"\u002Fimages\u002Fcategories\u002FAI-cover.png",sort:5,summary:aA,toc:[],body:{type:j,children:[{type:b,tag:i,props:{},children:[{type:a,value:aA}]}]},dir:E,path:"\u002Fcategories\u002Fai",extension:k,createdAt:D,updatedAt:D},{slug:aB,title:aC,cover:"\u002Fimages\u002Fcategories\u002Fsite.png",sort:99,summary:"關於本站的一些資訊",toc:[],body:{type:j,children:[]},dir:E,path:"\u002Fcategories\u002Fsite",extension:k,createdAt:G,updatedAt:G}],tags:[{slug:ay,title:az,toc:[],body:{type:j,children:[]},dir:r,path:"\u002Ftags\u002Fai",extension:k,createdAt:P,updatedAt:P},{slug:aD,title:aD,toc:[],body:{type:j,children:[]},dir:r,path:"\u002Ftags\u002Fcss",extension:k,createdAt:F,updatedAt:F},{slug:"docker",title:"Docker",toc:[],body:{type:j,children:[]},dir:r,path:"\u002Ftags\u002Fdocker",extension:k,createdAt:I,updatedAt:I},{slug:"go",title:"go語言",toc:[],body:{type:j,children:[]},dir:r,path:"\u002Ftags\u002Fgo",extension:k,createdAt:F,updatedAt:F},{slug:"javascript",title:"JavaScript",toc:[],body:{type:j,children:[]},dir:r,path:"\u002Ftags\u002Fjavascript",extension:k,createdAt:H,updatedAt:Q},{slug:aE,title:aE,toc:[],body:{type:j,children:[]},dir:r,path:"\u002Ftags\u002Fhtml",extension:k,createdAt:P,updatedAt:P},{slug:"macos",title:"MacOS",toc:[],body:{type:j,children:[]},dir:r,path:"\u002Ftags\u002Fmacos",extension:k,createdAt:Q,updatedAt:Q},au,{slug:"postgresql",title:"Postgresql",toc:[],body:{type:j,children:[]},dir:r,path:"\u002Ftags\u002Fpostgresql",extension:k,createdAt:Q,updatedAt:I},{slug:aB,title:aC,toc:[],body:{type:j,children:[]},dir:r,path:"\u002Ftags\u002Fsite",extension:k,createdAt:F,updatedAt:F},{slug:Z,title:Z,toc:[],body:{type:j,children:[]},dir:r,path:"\u002Ftags\u002Fsoftware",extension:k,createdAt:H,updatedAt:H},{slug:"telegram",title:"Telegram",toc:[],body:{type:j,children:[]},dir:r,path:"\u002Ftags\u002Ftelegram",extension:k,createdAt:I,updatedAt:I}],prev:{slug:"2022-04-10-mac-os-tool",title:"大推！MacOS 上好用軟體集",path:"\u002Farticles\u002F2022-04-10-mac-os-tool"},next:null}],fetch:{},mutations:void 0}}("text","element","span","token","\n","punctuation","code","variable","p","root",".md","function","li"," ","$zip","operator",";","\u002Ftags","-\u003E","(",")","div","nuxt-content-highlight","pre","line-numbers","strong","language-php","ol","參數說明","2025-01-22T10:21:45.234Z","\u002Fcategories","2025-01-22T10:21:45.228Z","2025-01-22T10:21:45.233Z","2025-01-22T10:21:45.229Z","2025-01-22T10:21:45.231Z","php","需求","壓縮範例程式","解壓縮程式",",","$filePath","2025-01-22T10:21:45.232Z","2025-01-22T10:21:45.230Z",2,"h2","a","true",-1,"icon","icon-link","ZipArchive","software","program","sudo","apt","=","keyword","new","class-name","\n\n","open","$dirname","$newFileName","$filename","$content","$index","$name","$oldName","$newName","close","$zipFile",{},1,"分享各種程式設計的小技巧",{},"各種好用軟體分享","各種前端開發工具及開發技巧分享","各種資料庫系統，使用上的小技巧","ai","AI","各種AI技術及其應用","site","站務資訊","css","html")));