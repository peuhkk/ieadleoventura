# IEAD Leoventura — Central digital

Site estático (HTML, CSS e JavaScript puro). Sem backend, sem banco de dados, gratuito no Netlify.

## Publicar no Netlify
1. Acesse app.netlify.com e entre na sua conta.
2. Em **Add new site > Deploy manually**, arraste a pasta `iead-leoventura` (ou o ZIP descompactado).
3. Pronto: o Netlify gera um endereço com HTTPS. Depois, em **Site configuration > Change site name**, escolha um nome.
4. Edite `index.html` e troque `SEU-SITE.netlify.app` (4 linhas de Open Graph) pelo endereço final, e envie de novo.

## Onde editar
Tudo em **`js/config.js`**. Campos vazios (`""`) fazem o botão correspondente sumir.
- **Instagram / YouTube:** cole o link em `redes`.
- **WhatsApp:** `contato.whatsapp`, só números com DDI e DDD (ex.: `5573999999999`). Ativa também "Pedido de oração" e "Contato".
- **Endereço / Maps:** `contato.endereco`. Para o ponto exato, cole o link do Google Maps em `mapsUrl`.
- **Horários dos cultos:** `cultos`. Sem horário aparece "Horário a definir".
- **Eventos:** `eventos`. **Departamentos:** `departamentos` (UMADEL já incluído; preencha `url`).
- **Textos institucionais:** `hero` e `institucional`.

## Logotipo, foto e favicon
- Logo: substitua `assets/logo/logo.png` (mesmo nome) ou altere `igreja.logo`. O logo é branco, então o cabeçalho e o hero usam fundo azul-noite.
- Foto: coloque em `assets/images/` (JPG/WebP, até ~200 KB, 1200 px de largura) e preencha `igreja.foto` e `igreja.fotoAlt`.
- Favicon: `assets/logo/favicon.png`.
- Compartilhamento (WhatsApp/Instagram): substitua `assets/images/og.png` por uma imagem 1200×630.

## Cores
Variáveis no início de `css/style.css`.
