__NUXT_JSONP__("/articles/2025-01-20-postgresql-materialzed-view", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ){av.slug=$;av.title="資料庫";av.cover="\u002Fimages\u002Fcategories\u002Fdatabase.png";av.sort=4;av.summary=aw;av.toc=[];av.body={type:g,children:[{type:b,tag:j,props:{},children:[{type:a,value:aw}]}]};av.dir=x;av.path="\u002Fcategories\u002Fdatabase";av.extension=h;av.createdAt=w;av.updatedAt=w;ax.slug=aa;ax.title="Postgresql";ax.toc=[];ax.body={type:g,children:[]};ax.dir=k;ax.path="\u002Ftags\u002Fpostgresql";ax.extension=h;ax.createdAt=N;ax.updatedAt=G;return {data:[{post:{slug:"2025-01-20-postgresql-materialzed-view",title:"PostgreSQL 的高效查詢策略：利用 Materialized View 達成更快的回應速度",summary:"PostgreSQL Materialized View 是一種數據視圖，它會將查詢結果儲存到一個表中，以便在需要時快速訪問。",image:"\u002Fimages\u002Farticles\u002F2025-01-20-postgresql-materialized-view\u002Fcover.png",status:true,pubDate:"2025-01-20T15:25:00.000Z",category:$,tags:[aa],toc:[{id:ab,depth:P,text:ac},{id:ad,depth:t,text:ae},{id:J,depth:t,text:J},{id:af,depth:t,text:ag},{id:ah,depth:P,text:ai},{id:aj,depth:t,text:ak},{id:K,depth:t,text:K},{id:al,depth:t,text:am},{id:an,depth:t,text:ao},{id:L,depth:P,text:L}],body:{type:g,children:[{type:b,tag:Q,props:{id:ab},children:[{type:b,tag:l,props:{ariaHidden:m,href:"#postgresql-view-%E6%AA%A2%E8%A6%96%E8%A1%A8-%E5%92%8C-materialized-view-%E5%AF%A6%E9%AB%94%E5%8C%96%E6%AA%A2%E8%A6%96%E8%A1%A8",tabIndex:n},children:[{type:b,tag:c,props:{className:[o,p]},children:[]}]},{type:a,value:ac}]},{type:a,value:d},{type:b,tag:j,props:{},children:[{type:a,value:"PostgreSQL 提供了 "},{type:b,tag:q,props:{},children:[{type:a,value:M}]},{type:a,value:" 和 "},{type:b,tag:q,props:{},children:[{type:a,value:"MATERIALIZED VIEW"}]},{type:a,value:" 兩種檢示表，分別用於查詢和儲存結果。"}]},{type:a,value:d},{type:b,tag:v,props:{id:ad},children:[{type:b,tag:l,props:{ariaHidden:m,href:"#view-%E6%AA%A2%E8%A6%96%E8%A1%A8",tabIndex:n},children:[{type:b,tag:c,props:{className:[o,p]},children:[]}]},{type:a,value:ae}]},{type:a,value:d},{type:b,tag:j,props:{},children:[{type:a,value:"是一種虛擬表，它會根據查詢語句來生成資料。當查詢時，PostgreSQL 會自動計算並返回結果集。"}]},{type:a,value:d},{type:b,tag:j,props:{},children:[{type:a,value:"其優點如下："}]},{type:a,value:d},{type:b,tag:R,props:{},children:[{type:a,value:d},{type:b,tag:r,props:{},children:[{type:b,tag:s,props:{},children:[{type:a,value:"簡化查詢"}]},{type:a,value:"：將複雜查詢存為檢示表，可以簡化後續的查詢。"}]},{type:a,value:d},{type:b,tag:r,props:{},children:[{type:b,tag:s,props:{},children:[{type:a,value:"提高安全性"}]},{type:a,value:"：檢視表可以避免直接對數據庫進行操作，提高了安全性，並可以限制用戶對數據資料的查詢權限。"}]},{type:a,value:d},{type:b,tag:r,props:{},children:[{type:b,tag:s,props:{},children:[{type:a,value:"可重用性"}]},{type:a,value:"：檢視表可以被多次使用，而不需要重新計算。"}]},{type:a,value:d},{type:b,tag:r,props:{},children:[{type:b,tag:s,props:{},children:[{type:a,value:"節省空間"}]},{type:a,value:"：不保存數據，節省空間。"}]},{type:a,value:d}]},{type:a,value:d},{type:b,tag:v,props:{id:J},children:[{type:b,tag:l,props:{ariaHidden:m,href:"#%E7%AF%84%E4%BE%8B",tabIndex:n},children:[{type:b,tag:c,props:{className:[o,p]},children:[]}]},{type:a,value:J}]},{type:a,value:d},{type:b,tag:z,props:{className:[A]},children:[{type:b,tag:B,props:{className:[C,D]},children:[{type:b,tag:q,props:{},children:[{type:b,tag:c,props:{className:[e,f]},children:[{type:a,value:S}]},{type:a,value:"  "},{type:b,tag:c,props:{className:[e,f]},children:[{type:a,value:M}]},{type:a,value:" my_view "},{type:b,tag:c,props:{className:[e,f]},children:[{type:a,value:T}]},{type:a,value:d},{type:b,tag:c,props:{className:[e,f]},children:[{type:a,value:U}]},{type:a,value:V},{type:b,tag:c,props:{className:[e,i]},children:[{type:a,value:E}]},{type:a,value:W},{type:b,tag:c,props:{className:[e,i]},children:[{type:a,value:E}]},{type:a,value:u},{type:b,tag:c,props:{className:[e,"function"]},children:[{type:a,value:"COUNT"}]},{type:b,tag:c,props:{className:[e,i]},children:[{type:a,value:ap}]},{type:b,tag:c,props:{className:[e,X]},children:[{type:a,value:aq}]},{type:b,tag:c,props:{className:[e,i]},children:[{type:a,value:ar}]},{type:a,value:u},{type:b,tag:c,props:{className:[e,f]},children:[{type:a,value:T}]},{type:a,value:" total_count\n"},{type:b,tag:c,props:{className:[e,f]},children:[{type:a,value:Y}]},{type:a,value:" my_table\n"},{type:b,tag:c,props:{className:[e,f]},children:[{type:a,value:"GROUP"}]},{type:a,value:u},{type:b,tag:c,props:{className:[e,f]},children:[{type:a,value:"BY"}]},{type:a,value:V},{type:b,tag:c,props:{className:[e,i]},children:[{type:a,value:E}]},{type:a,value:W},{type:b,tag:c,props:{className:[e,i]},children:[{type:a,value:F}]},{type:a,value:d}]}]}]},{type:a,value:d},{type:b,tag:v,props:{id:af},children:[{type:b,tag:l,props:{ariaHidden:m,href:"#view-%E7%9A%84%E7%BC%BA%E9%BB%9E",tabIndex:n},children:[{type:b,tag:c,props:{className:[o,p]},children:[]}]},{type:a,value:ag}]},{type:a,value:d},{type:b,tag:R,props:{},children:[{type:a,value:d},{type:b,tag:r,props:{},children:[{type:b,tag:s,props:{},children:[{type:a,value:"性能問題"}]},{type:a,value:"：太複雜的檢示表查詢可能會影響性能。"}]},{type:a,value:d},{type:b,tag:r,props:{},children:[{type:b,tag:s,props:{},children:[{type:a,value:"無法建立索引"}]},{type:a,value:"：檢視表本身不能直接建立索引，需要對原始數據進行索引。"}]},{type:a,value:d}]},{type:a,value:d},{type:b,tag:Q,props:{id:ah},children:[{type:b,tag:l,props:{ariaHidden:m,href:"#materialized-view-%E5%AF%A6%E9%AB%94%E5%8C%96%E6%AA%A2%E8%A6%96%E8%A1%A8",tabIndex:n},children:[{type:b,tag:c,props:{className:[o,p]},children:[]}]},{type:a,value:ai}]},{type:a,value:d},{type:b,tag:j,props:{},children:[{type:a,value:"Materialized View 是一種檢視表，它會在查詢時計算並儲存結果。這意味著當查詢 Materialized View 時，它會直接使用儲存的結果而不是重新計算。"}]},{type:a,value:d},{type:b,tag:j,props:{},children:[{type:a,value:"其特點如下："}]},{type:a,value:d},{type:b,tag:R,props:{},children:[{type:a,value:d},{type:b,tag:r,props:{},children:[{type:b,tag:s,props:{},children:[{type:a,value:"資料存儲"}]},{type:a,value:"：Materialized View 會在查詢時計算並儲存結果。這意味著當查詢 Materialized View 時，它會直接使用儲存的結果而不是重新計算。"}]},{type:a,value:d},{type:b,tag:r,props:{},children:[{type:b,tag:s,props:{},children:[{type:a,value:"性能優勢"}]},{type:a,value:"：因為資料已經被計算好，所以查詢速度會更快，特別是複雜的查詢。"}]},{type:a,value:d},{type:b,tag:r,props:{},children:[{type:b,tag:s,props:{},children:[{type:a,value:"索引支持"}]},{type:a,value:"：Materialized View 可以像普通表一樣建立索引，因此可以對檢視表進行高效的查詢操作。"}]},{type:a,value:d}]},{type:a,value:d},{type:b,tag:v,props:{id:aj},children:[{type:b,tag:l,props:{ariaHidden:m,href:"#%E5%BB%BA%E7%AB%8B-materialized-view",tabIndex:n},children:[{type:b,tag:c,props:{className:[o,p]},children:[]}]},{type:a,value:ak}]},{type:a,value:d},{type:b,tag:j,props:{},children:[{type:a,value:"在 PostgreSQL 中，可以使用 "},{type:b,tag:q,props:{},children:[{type:a,value:"CREATE MATERIALIZED VIEW"}]},{type:a,value:" 语句來建立 Materialized View。以下是一個簡單的示例："}]},{type:a,value:d},{type:b,tag:z,props:{className:[A]},children:[{type:b,tag:B,props:{className:[C,D]},children:[{type:b,tag:q,props:{},children:[{type:b,tag:c,props:{className:[e,f]},children:[{type:a,value:S}]},{type:a,value:" MATERIALIZED "},{type:b,tag:c,props:{className:[e,f]},children:[{type:a,value:M}]},{type:a,value:as},{type:b,tag:c,props:{className:[e,f]},children:[{type:a,value:T}]},{type:a,value:d},{type:b,tag:c,props:{className:[e,f]},children:[{type:a,value:U}]},{type:a,value:V},{type:b,tag:c,props:{className:[e,i]},children:[{type:a,value:E}]},{type:a,value:W},{type:b,tag:c,props:{className:[e,i]},children:[{type:a,value:E}]},{type:a,value:u},{type:b,tag:c,props:{className:[e,i]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[e,i]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[e,i]},children:[{type:a,value:Z}]},{type:a,value:d},{type:b,tag:c,props:{className:[e,f]},children:[{type:a,value:Y}]},{type:a,value:" my_table"},{type:b,tag:c,props:{className:[e,i]},children:[{type:a,value:F}]},{type:a,value:d}]}]}]},{type:a,value:d},{type:b,tag:v,props:{id:K},children:[{type:b,tag:l,props:{ariaHidden:m,href:"#%E5%BB%BA%E7%AB%8B%E7%B4%A2%E5%BC%95",tabIndex:n},children:[{type:b,tag:c,props:{className:[o,p]},children:[]}]},{type:a,value:K}]},{type:a,value:d},{type:b,tag:j,props:{},children:[{type:a,value:"Materialized View 可以像普通表一樣建立索引，因此可以對檢視表進行高效的查詢操作。以下是一個示例："}]},{type:a,value:d},{type:b,tag:z,props:{className:[A]},children:[{type:b,tag:B,props:{className:[C,D]},children:[{type:b,tag:q,props:{},children:[{type:b,tag:c,props:{className:[e,f]},children:[{type:a,value:S}]},{type:a,value:u},{type:b,tag:c,props:{className:[e,f]},children:[{type:a,value:"INDEX"}]},{type:a,value:" idx_my_materialized_view_column1 "},{type:b,tag:c,props:{className:[e,f]},children:[{type:a,value:"ON"}]},{type:a,value:at},{type:b,tag:c,props:{className:[e,i]},children:[{type:a,value:ap}]},{type:a,value:"column1"},{type:b,tag:c,props:{className:[e,i]},children:[{type:a,value:ar}]},{type:b,tag:c,props:{className:[e,i]},children:[{type:a,value:F}]},{type:a,value:d}]}]}]},{type:a,value:d},{type:b,tag:v,props:{id:al},children:[{type:b,tag:l,props:{ariaHidden:m,href:"#%E6%9B%B4%E6%96%B0-materialized-view",tabIndex:n},children:[{type:b,tag:c,props:{className:[o,p]},children:[]}]},{type:a,value:am}]},{type:a,value:d},{type:b,tag:j,props:{},children:[{type:a,value:"Materialized View 會自動更新，當數據庫中的表發生更改時。你可以使用 "},{type:b,tag:q,props:{},children:[{type:a,value:"REFRESH MATERIALIZED VIEW"}]},{type:a,value:" 语句來刷新 Materialized View："}]},{type:a,value:d},{type:b,tag:z,props:{className:[A]},children:[{type:b,tag:B,props:{className:[C,D]},children:[{type:b,tag:q,props:{},children:[{type:a,value:"REFRESH MATERIALIZED "},{type:b,tag:c,props:{className:[e,f]},children:[{type:a,value:M}]},{type:a,value:at},{type:b,tag:c,props:{className:[e,i]},children:[{type:a,value:F}]},{type:a,value:d}]}]}]},{type:a,value:d},{type:b,tag:v,props:{id:an},children:[{type:b,tag:l,props:{ariaHidden:m,href:"#%E4%BD%BF%E7%94%A8-materialized-view",tabIndex:n},children:[{type:b,tag:c,props:{className:[o,p]},children:[]}]},{type:a,value:ao}]},{type:a,value:d},{type:b,tag:j,props:{},children:[{type:a,value:"Materialized View 可以像普通表一樣使用，因此可以對檢視表進行高效的查詢操作。以下是一個示例："}]},{type:a,value:d},{type:b,tag:z,props:{className:[A]},children:[{type:b,tag:B,props:{className:[C,D]},children:[{type:b,tag:q,props:{},children:[{type:b,tag:c,props:{className:[e,f]},children:[{type:a,value:U}]},{type:a,value:u},{type:b,tag:c,props:{className:[e,X]},children:[{type:a,value:aq}]},{type:a,value:u},{type:b,tag:c,props:{className:[e,f]},children:[{type:a,value:Y}]},{type:a,value:as},{type:b,tag:c,props:{className:[e,f]},children:[{type:a,value:"WHERE"}]},{type:a,value:" column1 "},{type:b,tag:c,props:{className:[e,X]},children:[{type:a,value:"="}]},{type:a,value:u},{type:b,tag:c,props:{className:[e,"string"]},children:[{type:a,value:"'value'"}]},{type:b,tag:c,props:{className:[e,i]},children:[{type:a,value:F}]},{type:a,value:d}]}]}]},{type:a,value:d},{type:b,tag:Q,props:{id:L},children:[{type:b,tag:l,props:{ariaHidden:m,href:"#%E7%B5%90%E8%AB%96",tabIndex:n},children:[{type:b,tag:c,props:{className:[o,p]},children:[]}]},{type:a,value:L}]},{type:a,value:d},{type:b,tag:j,props:{},children:[{type:a,value:"Materialized View 是一個非常有用的工具，它可以在數據庫中提供快速的查詢結果。通過使用索引和定期刷新，Materialized View 可以提高查詢性能，使應用程序更加高效。"}]}]},dir:"\u002Farticles",path:"\u002Farticles\u002F2025-01-20-postgresql-materialzed-view",extension:h,createdAt:au,updatedAt:au,categoryData:av,tagsData:[ax]},categories:[{slug:"program",title:"程式設計",cover:"\u002Fimages\u002Fcategories\u002Fprogram.png",sort:ay,summary:az,toc:[],body:{type:g,children:[{type:b,tag:j,props:{},children:[{type:a,value:az}]}]},dir:x,path:"\u002Fcategories\u002Fprogram",extension:h,createdAt:H,updatedAt:H},{slug:_,title:"軟體",cover:"\u002Fimages\u002Fcategories\u002Fsoftware.png",sort:ay,summary:aA,toc:[],body:{type:g,children:[{type:b,tag:j,props:{},children:[{type:a,value:aA}]}]},dir:x,path:"\u002Fcategories\u002Fsoftware",extension:h,createdAt:H,updatedAt:w},{slug:"frontend",title:"前端",cover:"\u002Fimages\u002Fcategories\u002Ffront-end.png",sort:t,summary:aB,toc:[],body:{type:g,children:[{type:b,tag:j,props:{},children:[{type:a,value:aB}]}]},dir:x,path:"\u002Fcategories\u002Ffrontend",extension:h,createdAt:w,updatedAt:w},av,{slug:aC,title:aD,cover:"\u002Fimages\u002Fcategories\u002FAI-cover.png",sort:5,summary:aE,toc:[],body:{type:g,children:[{type:b,tag:j,props:{},children:[{type:a,value:aE}]}]},dir:x,path:"\u002Fcategories\u002Fai",extension:h,createdAt:w,updatedAt:w},{slug:aF,title:aG,cover:"\u002Fimages\u002Fcategories\u002Fsite.png",sort:99,summary:"關於本站的一些資訊",toc:[],body:{type:g,children:[]},dir:x,path:"\u002Fcategories\u002Fsite",extension:h,createdAt:H,updatedAt:H}],tags:[{slug:aC,title:aD,toc:[],body:{type:g,children:[]},dir:k,path:"\u002Ftags\u002Fai",extension:h,createdAt:O,updatedAt:O},{slug:aH,title:aH,toc:[],body:{type:g,children:[]},dir:k,path:"\u002Ftags\u002Fcss",extension:h,createdAt:y,updatedAt:y},{slug:"docker",title:"Docker",toc:[],body:{type:g,children:[]},dir:k,path:"\u002Ftags\u002Fdocker",extension:h,createdAt:G,updatedAt:G},{slug:"go",title:"go語言",toc:[],body:{type:g,children:[]},dir:k,path:"\u002Ftags\u002Fgo",extension:h,createdAt:y,updatedAt:y},{slug:"javascript",title:"JavaScript",toc:[],body:{type:g,children:[]},dir:k,path:"\u002Ftags\u002Fjavascript",extension:h,createdAt:I,updatedAt:N},{slug:aI,title:aI,toc:[],body:{type:g,children:[]},dir:k,path:"\u002Ftags\u002Fhtml",extension:h,createdAt:O,updatedAt:O},{slug:"macos",title:"MacOS",toc:[],body:{type:g,children:[]},dir:k,path:"\u002Ftags\u002Fmacos",extension:h,createdAt:N,updatedAt:N},{slug:aJ,title:aJ,toc:[],body:{type:g,children:[]},dir:k,path:"\u002Ftags\u002Fphp",extension:h,createdAt:I,updatedAt:I},ax,{slug:aF,title:aG,toc:[],body:{type:g,children:[]},dir:k,path:"\u002Ftags\u002Fsite",extension:h,createdAt:y,updatedAt:y},{slug:_,title:_,toc:[],body:{type:g,children:[]},dir:k,path:"\u002Ftags\u002Fsoftware",extension:h,createdAt:I,updatedAt:I},{slug:"telegram",title:"Telegram",toc:[],body:{type:g,children:[]},dir:k,path:"\u002Ftags\u002Ftelegram",extension:h,createdAt:G,updatedAt:G}],prev:{slug:"2025-01-24-mac-os-app",title:"MacOS：2025 我推的 Mac 好用 App",path:"\u002Farticles\u002F2025-01-24-mac-os-app"},next:{slug:"2025-01-19-2025-new-theme",title:"2025 新版型",path:"\u002Farticles\u002F2025-01-19-2025-new-theme"}}],fetch:{},mutations:void 0}}("text","element","span","\n","token","keyword","root",".md","punctuation","p","\u002Ftags","a","true",-1,"icon","icon-link","code","li","strong",3," ","h3","2025-01-22T10:21:45.234Z","\u002Fcategories","2025-01-22T10:21:45.228Z","div","nuxt-content-highlight","pre","language-sql","line-numbers",",",";","2025-01-22T10:21:45.231Z","2025-01-22T10:21:45.233Z","2025-01-22T10:21:45.229Z","範例","建立索引","結論","VIEW","2025-01-22T10:21:45.230Z","2025-01-22T10:21:45.232Z",2,"h2","ul","CREATE","AS","SELECT"," column1"," column2","operator","FROM",".","software","database","postgresql","postgresql-view-檢視表-和-materialized-view-實體化檢視表","PostgreSQL VIEW (檢視表) 和 Materialized View (實體化檢視表)","view-檢視表","VIEW (檢視表)","view-的缺點","VIEW 的缺點","materialized-view-實體化檢視表","Materialized View (實體化檢視表)","建立-materialized-view","建立 Materialized View","更新-materialized-view","更新 Materialized View","使用-materialized-view","使用 Materialized View","(","*",")"," my_materialized_view "," my_materialized_view","2025-01-22T10:21:45.225Z",{},"各種資料庫系統，使用上的小技巧",{},1,"分享各種程式設計的小技巧","各種好用軟體分享","各種前端開發工具及開發技巧分享","ai","AI","各種AI技術及其應用","site","站務資訊","css","html","php")));