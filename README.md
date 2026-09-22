# Fork Capital — site institucional

Site estático (HTML/CSS/JS puro, sem build step) pronto para publicar no Netlify.

## Estrutura

```
index.html              Home
como-funciona.html       Arquitetura não custodial + onboarding
estrategias.html         Opportunity vs. Preservation
gestao-de-risco.html     Filosofia de risco + ciclo emocional
research.html            Arquitetura de pesquisa
seguranca.html           Segurança + comparação com fundos
sobre.html                Manifesto, posicionamento, para quem é
faq.html                  Perguntas frequentes
solicitar-acesso.html     Formulário de qualificação (Netlify Forms)
obrigado.html              Página de confirmação pós-formulário
legal.html                 Termos, privacidade, risco, avisos, jurisdição
404.html                   Página de erro
css/style.css               Sistema de design (cores, tipografia, componentes)
js/main.js                  Nav mobile, header fixo, acordeão de FAQ
netlify.toml, robots.txt, sitemap.xml  Configuração de deploy e SEO
```

## Publicar no Netlify

**Opção 1 — arrastar e soltar:** em app.netlify.com, "Add new site" → "Deploy manually" → arraste esta pasta (ou o .zip) para a área indicada.

**Opção 2 — Git:** suba esta pasta para um repositório e conecte em "Import an existing project". Não há comando de build — publish directory é a raiz (`.`).

O formulário em `solicitar-acesso.html` já está pronto para o **Netlify Forms** (atributo `data-netlify="true"`); nenhuma configuração extra é necessária. As respostas aparecem em Site → Forms no painel do Netlify.

## Antes de publicar de verdade

Alguns pontos estão marcados como placeholder e devem ser substituídos:

- **E-mail de contato** (`contato@forkcapital.com`) e domínio do site (`forkcapital.com` em `robots.txt`/`sitemap.xml`) — trocar pelos dados reais.
- **`legal.html`** é um esqueleto razoável de Termos de Uso, Privacidade, Política de Risco, Avisos e Jurisdicionalidade — precisa de revisão por assessoria jurídica antes de valer como documento oficial, especialmente quanto ao enquadramento regulatório de gestão de ativos digitais na(s) jurisdição(ões) de operação.
- **Taxa de administração**: o site mostra o split de performance (70/30) e a mecânica de Marca d'Água, mas não publica um percentual de taxa de administração — isso é proposital, para exibir apenas após validação comercial final, e fica para a proposta individual.
- **Painel de gestão** (seção "Transparência começa no painel", na Home): usa dados de demonstração (`00.00` / `—`) de propósito. Não substituir por números reais até existir track record auditado — inclusive por conta da própria regra interna da Fork de nunca publicar performance inventada ou hipotética.
- **Exchanges suportadas**: o formulário pede a exchange do investidor em texto livre, sem assumir uma lista fixa de integrações — ajustar se/quando houver parceiros confirmados.
