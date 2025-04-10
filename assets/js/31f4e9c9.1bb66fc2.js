"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[247],{2389:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>l,contentTitle:()=>c,default:()=>g,frontMatter:()=>m,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"Prova","title":"Prova","description":"","source":"@site/curso/v18/proficiency/Prova.mdx","sourceDirName":".","slug":"/Prova","permalink":"/gxacademy/curso/v18/proficiency/Prova","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"modulo2Sidebar","previous":{"title":"Proficiency","permalink":"/gxacademy/curso/v18/proficiency/intro"},"next":{"title":"Funciona assim","permalink":"/gxacademy/curso/v18/proficiency/Transacoes/intro"}}');var s=o(4848),i=o(8453),t=o(6540);const n=[{id:"1",nivel:"proficiency",pergunta:(0,s.jsxs)(s.Fragment,{children:["Analise o desenho da transa\xe7\xe3o Funcion\xe1rio \xe0 seguir. Foi solicitado uma listagem de todos os produtos que o funcion\xe1rio utilizou ao longo do uso do sistema, para isto, um mesmo produto n\xe3o deve-se repetir.",(0,s.jsx)("br",{}),(0,s.jsx)("img",{src:"/gxacademy/img/questoes/5301f1ee-1485-4b09-82cc-361851639813.png",alt:"Exemplo do evento Load",style:{maxWidth:"100%",marginTop:"1rem",marginBottom:"1rem"}}),(0,s.jsx)("img",{src:"/gxacademy/img/questoes/22d08b82-05b0-4efe-adab-82cbf82aa592.png",alt:"Exemplo do evento Load",style:{maxWidth:"100%",marginTop:"1rem",marginBottom:"1rem"}}),(0,s.jsx)("br",{}),"Dado o desenho aperesentado, \xe9 correto afirmar que est\xe1 sendo cumprido o que se pede?",(0,s.jsx)("br",{}),(0,s.jsx)("i",{children:"O que n\xe3o foi apresentado \xe9 porque n\xe3o \xe9 relevante e n\xe3o altera na resolu\xe7\xe3o."})]}),alternativas:[(0,s.jsx)(s.Fragment,{children:"Verdadeiro"}),(0,s.jsx)(s.Fragment,{children:"Falso"})],correta:0,peso:2,explicacao:(0,s.jsx)(s.Fragment,{})},{id:"2",nivel:"proficiency",pergunta:(0,s.jsxs)(s.Fragment,{children:["Foi modelado uma transa\xe7\xe3o Produto e a sua Categoria. A tabela Produto armazena informa\xe7\xf5es sobre os produtos, sendo que a coluna CatCod \xe9 uma chave estrangeira que faz refer\xeancia \xe0 tabela Categoria, onde CatCod \xe9 o c\xf3digo da categoria e CatNom \xe9 o nome da categoria.",(0,s.jsx)("br",{}),"Precisamos fazer uma listagem de todas as categorias que possuem ao menos um produto vinculado \xe0 ela. Dado esta solicita\xe7\xe3o, analise as alternativas abaixo:",(0,s.jsx)("br",{}),(0,s.jsx)("img",{src:"/gxacademy/img/questoes/5301f5ee-1485-4b09-82cc-361691639813.png",alt:"Imagem",style:{maxWidth:"50%",marginTop:"1rem",marginBottom:"1rem"}}),(0,s.jsx)("img",{src:"/gxacademy/img/questoes/6ac3f2de-9346-432c-8e1b-ab6b742990a2.png",alt:"Imagem",style:{maxWidth:"50%",marginTop:"1rem",marginBottom:"1rem"}})]}),alternativas:[(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("pre",{children:(0,s.jsx)("code",{children:String.raw`for each Produto aa
    where not CatCod.IsNull()
    where not CatNom.IsNull()

    msg(CatNom,status)
endfor`})})}),(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("pre",{children:(0,s.jsx)("code",{children:String.raw`for each Produto
    unique CatCod
    
    msg(CatNom,status)
endfor`})})}),(0,s.jsxs)(s.Fragment,{children:['Nenhuma das anteriores, pois s\xf3 colocar um "isNull()" n\xe3o garante que sejam obtidas todos os registros \xfanicos mesmo que filtre todas as categorias que estejam associados a um produto (j\xe1 que estamos sob a tabela Produto). Tamb\xe9m \xe9 uma inverdade \xe0 partir de Produto acessar CatNom enquanto se faz um unique, pois deve-se utilizar apenas os registros da cl\xe1usula para tal. Uma das maneiras de se resolver \xe9 acessando Categoria e fazendo o unique l\xe1, e s\xf3 ent\xe3o dentro deste for each de Categoria fazemos um segundo for each por Produto pegando o primeiro registro, assim conseguimos garantir que somente s\xe3o listados as categorias \xfanicas que tenham associados em si um produto.',(0,s.jsx)("pre",{children:(0,s.jsx)("code",{children:String.raw`for each Categoria
    unique CatNom
    
    for each Produto
        print CatNom
        exit
    endfor
endfor`})})]}),(0,s.jsx)(s.Fragment,{children:"Nenhuma das anteriores"})],correta:1,peso:1,explicacao:(0,s.jsx)(s.Fragment,{})},{id:"3",nivel:"proficiency",pergunta:(0,s.jsxs)(s.Fragment,{children:["Foi solicitada a uma consultoria a modelagem de um sisteminha simples para controle de produtos separados por filiais. Este \xe9 um esbo\xe7o inicial que ainda n\xe3o foi passado para o time de qualidade. A ideia \xe9 que a tabela Produto armazene informa\xe7\xf5es sobre os produtos dispon\xedveis no sistema, associando-os a uma categoria e \xe0 filial respons\xe1vel pela venda. A tabela Categoria, por sua vez, ser\xe1 respons\xe1vel por registrar as diferentes categorias de produtos, facilitando a organiza\xe7\xe3o e a classifica\xe7\xe3o dos itens. A tabela Filial armazenar\xe1 informa\xe7\xf5es sobre as filiais da empresa, vinculando cada uma a uma categoria de produtos que comercializa e \xe0 empresa propriet\xe1ria. Por fim, a tabela Empresa registrar\xe1 as informa\xe7\xf5es sobre as empresas que possuem as filiais, permitindo a vincula\xe7\xe3o entre cada filial e sua respectiva empresa.",(0,s.jsx)("br",{}),(0,s.jsx)("img",{src:"/gxacademy/img/questoes/48ff1a29-37f8-49c6-b0c4-81b1b6769006.png",alt:"Imagem",style:{maxWidth:"50%",marginTop:"1rem",marginBottom:"1rem"}}),(0,s.jsx)("img",{src:"/gxacademy/img/questoes/2d0c72b8-ce6e-4647-8ad8-88178f6763a7.png",alt:"Imagem",style:{maxWidth:"50%",marginTop:"1rem",marginBottom:"1rem"}}),(0,s.jsx)("img",{src:"/gxacademy/img/questoes/9863eea0-f4b1-4dca-b1e6-6085948708db.png",alt:"Imagem",style:{maxWidth:"50%",marginTop:"1rem",marginBottom:"1rem"}}),(0,s.jsx)("img",{src:"/gxacademy/img/questoes/1ee816b3-825f-4b12-811d-587cf39aacbb.png",alt:"Imagem",style:{maxWidth:"50%",marginTop:"1rem",marginBottom:"1rem"}}),(0,s.jsx)("br",{}),"Com base nas tabelas e relacionamentos apresentados, quais dos \xedndices a seguir seriam necess\xe1rios para garantir a integridade dos dados e a performance do sistema?"]}),alternativas:[(0,s.jsxs)(s.Fragment,{children:["A modelagem inicial est\xe1 correta e cumpre o que se pede e ser\xe3o criados os seguintes index:",(0,s.jsx)("pre",{children:(0,s.jsx)("code",{children:String.raw`- Criar índice para a PK EmpCod em Empresa.  
- Criar índice para a PK CatCod em Categoria.  
- Criar índice para a PK FilCod e FK EmpCod em Filial.  
- Criar índice para a PK ProCod, FK FilCod e FK CatCod em Produto.`})})]}),(0,s.jsxs)(s.Fragment,{children:["A modelagem inicial est\xe1 correta e cumpre o que se pede e ser\xe3o criados os seguintes index:",(0,s.jsx)("pre",{children:(0,s.jsx)("code",{children:String.raw`- Criar índice para a PK EmpCod em Empresa.
- Criar índice para a PK CatCod em Categoria.
- Criar índice para a PK FilCod, FK EmpCod, FK CatCod e FK ProCod em Filial.
- Criar índice para a PK ProCod e FK FilCod em Produto.`})})]}),(0,s.jsxs)(s.Fragment,{children:["A modelagem inicial est\xe1 incorreta, pois n\xe3o \xe9 poss\xedvel selecionar uma categoria para produto. Da maneira como est\xe1, ser\xe3o criados os seguintes index:",(0,s.jsx)("pre",{children:(0,s.jsx)("code",{children:String.raw`- Criar índice para a PK EmpCod em Empresa.
- Criar índice para a PK CatCod em Categoria.
- Criar índice para a PK FilCod, FK EmpCod e FK CatCod em Filial.
- Criar índice para a PK ProCod e FK FilCod em Produto.`})})]}),(0,s.jsx)(s.Fragment,{children:"Nenhuma das anteriores"})],correta:2,peso:3,explicacao:(0,s.jsx)(s.Fragment,{})},{id:"4",nivel:"proficiency",pergunta:(0,s.jsx)(s.Fragment,{children:"Quais objetos Genexus podem ser expostos como WebService Rest \xe0 partir do Objeto API?"}),alternativas:[(0,s.jsx)(s.Fragment,{children:"Business Component e Data Provider"}),(0,s.jsx)(s.Fragment,{children:"Data Provider e Procedure"}),(0,s.jsx)(s.Fragment,{children:"Procedure e Data Provider"}),(0,s.jsx)(s.Fragment,{children:"Procedure, Data Provider e Business Component"})],correta:1,peso:2,explicacao:(0,s.jsx)(s.Fragment,{children:"O Business Component n\xe3o pode ser declado expl\xedcitamente como fazemos para um Data Provider e Procedure."})},{id:"5",nivel:"proficiency",pergunta:(0,s.jsxs)(s.Fragment,{children:["Podemos acessar o modo que o Business Component (BC) est\xe1 em determinado momento conferindo a propriedade Mode. Ela \xe9 do tipo de dom\xednio TrnMode, cujas op\xe7\xf5es s\xe3o Insert(INS), Update(UPD), Display(DSP) e Delete (DLT). Pois bem, aqui temos criado uma transa\xe7\xe3o Pessoa. Criamos um data provider que retorna uma pessoa \xe0 partir do seu c\xf3digo. Ap\xf3s fazer o load completo de todas as informa\xe7\xf5es desta pessoa \xe0 partir do Data Provider, determine o modo em que se encontra o BC ao imprim\xed-lo no msg.",(0,s.jsx)("br",{}),(0,s.jsx)("i",{children:"Vamos considerar que exista a pessoa com o c\xf3digo 1 buscado."}),(0,s.jsx)("br",{}),(0,s.jsx)("img",{src:"/gxacademy/img/questoes/b9ec6743-41c5-41ea-a5d2-0d30f47f226b.jpg",alt:"Imagem",style:{maxWidth:"100%",marginTop:"1rem",marginBottom:"1rem"}})]}),alternativas:[(0,s.jsx)(s.Fragment,{children:"Insert"}),(0,s.jsx)(s.Fragment,{children:"Update"}),(0,s.jsx)(s.Fragment,{children:"Este c\xf3digo n\xe3o ir\xe1 compilar, pois um Data Provider n\xe3o consegue retornar um BC. A maneira correta de carregar esta pessoa seria \xe0 partir do m\xe9todo Pessoa.Load(1), o qual far\xe1 com que o BC fique em modo Update."}),(0,s.jsx)(s.Fragment,{children:"Nenhuma das op\xe7\xf5es anteriores"})],correta:0,peso:2,explicacao:(0,s.jsx)(s.Fragment,{children:"Quando um Data Provider retorna um BC, ele fica em modo Insert"})}],d=()=>{const e="proficiency",[a,o]=(0,t.useState)([]),[r,i]=(0,t.useState)({}),[d,m]=(0,t.useState)(!1),[c,l]=(0,t.useState)(null),[u,p]=(0,t.useState)(0);(0,t.useEffect)((()=>{const a=n.filter((a=>a.nivel===e)).sort((()=>.5-Math.random())).slice(0,5);o(a);const r=a.reduce(((e,a)=>e+a.peso),0);p(r)}),[e,5]);return(0,s.jsxs)("div",{style:{padding:"2rem"},children:[(0,s.jsxs)("h2",{children:["Prova: N\xedvel ",e]}),a.map(((e,a)=>(0,s.jsxs)("div",{style:{marginBottom:"2rem",padding:"1rem",border:"1px solid #ccc",borderRadius:"8px"},children:[(0,s.jsxs)("div",{style:{marginBottom:"1rem"},children:[(0,s.jsxs)("b",{children:[e.id,".",(0,s.jsxs)("i",{children:[" (",(e.peso/u*100).toFixed(1),"%)"]})]})," ",e.pergunta]}),e.alternativas.map(((a,o)=>{const t=o===e.correta,n=r[e.id]===o;let m="";return d&&(t?m="green":n&&(m="red")),(0,s.jsx)("div",{style:{marginBottom:"0.5rem",color:m},children:(0,s.jsxs)("label",{children:[(0,s.jsx)("input",{type:"radio",name:e.id,value:o,disabled:d,checked:n,onChange:()=>{return a=e.id,r=o,void i((e=>({...e,[a]:r})));var a,r}})," ",a]})},o)})),d&&(0,s.jsxs)("div",{style:{marginTop:"0.5rem",fontStyle:"italic",fontSize:"0.9rem"},children:[(0,s.jsx)("strong",{children:"Explica\xe7\xe3o:"})," ",e.explicacao]})]},e.id))),!d&&(0,s.jsx)("button",{onClick:()=>{let e=0,o=0;a.forEach((a=>{const s=a.peso??1;r[a.id]===a.correta&&(e+=s),o+=s}));const s=(e/o*100).toFixed(2);l({notaTotal:e.toFixed(2),notaMaxima:o.toFixed(2),percentual:s}),m(!0)},style:{padding:"0.5rem 1rem",fontWeight:"bold"},children:"Corrigir"}),d&&c&&(0,s.jsxs)("div",{style:{marginTop:"2rem"},children:[(0,s.jsx)("h3",{children:"Resultado"}),(0,s.jsxs)("p",{children:["Pontua\xe7\xe3o: ",(0,s.jsx)("strong",{children:c.notaTotal})," de ",(0,s.jsx)("strong",{children:c.notaMaxima}),(0,s.jsx)("br",{}),"Percentual: ",(0,s.jsxs)("strong",{children:[c.percentual,"%"]})]})]})]})},m={},c=void 0,l={},u=[];function p(e){return(0,s.jsx)(d,{nivel:"proficiency",quantidade:2})}function g(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(p,{...e})}):p()}},8453:(e,a,o)=>{o.d(a,{R:()=>t,x:()=>n});var r=o(6540);const s={},i=r.createContext(s);function t(e){const a=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function n(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(i.Provider,{value:a},e.children)}}}]);