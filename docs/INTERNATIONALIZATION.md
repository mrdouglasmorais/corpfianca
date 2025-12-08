# Sistema de Internacionalização - Menu de Navegação

## Visão Geral

Este projeto implementa um sistema completo de internacionalização para o menu de navegação, suportando três idiomas:

- **Português (pt)** - Idioma padrão
- **Inglês (en)**
- **Espanhol (es)**

## Arquivos Principais

### 1. Arquivos de Tradução

- `messages/pt.json` - Traduções em português
- `messages/en.json` - Traduções em inglês
- `messages/es.json` - Traduções em espanhol

### 2. Componentes de Navegação

- `src/components/layout/header/Navbar.js` - Componente principal do menu
- `src/libs/getNavItemsI18n.js` - Geração dos itens do menu com traduções
- `src/hooks/useActiveLinkI18n.js` - Hook para detectar links ativos

### 3. Utilitários

- `src/utils/pathUtils.js` - Funções utilitárias para manipulação de caminhos

## Como Funciona

### URLs Localizadas

Todas as URLs incluem o prefixo do idioma:

- **Português**: `/pt/sobre`, `/pt/produtos`, `/pt/contato`
- **Inglês**: `/en/about`, `/en/products`, `/en/contact`
- **Espanhol**: `/es/acerca`, `/es/productos`, `/es/contacto`

### Estrutura das Traduções

```json
{
  "navigation": {
    "home": "Início",
    "pages": "Páginas",
    "services": "Serviços",
    "about_us": "Sobre nós",
    "contact": "Contato"
  }
}
```

### Uso nos Componentes

```javascript
import { useTranslations, useLocale } from 'next-intl';
import { createLocalizedPath } from '@/utils/pathUtils';

const MyComponent = () => {
  const t = useTranslations('navigation');
  const locale = useLocale();

  return <Link href={createLocalizedPath('/about', locale)}>{t('about_us')}</Link>;
};
```

## Funções Utilitárias

### `createLocalizedPath(path, locale)`

Cria URLs localizadas baseadas no idioma atual.

### `normalizePath(path, locale)`

Normaliza caminhos para comparação, removendo prefixos de idioma.

### `makeForcelyInactive(pathname, currentPathname)`

Define quais caminhos devem ser forçadamente inativos.

## Boas Práticas Implementadas

1. **Separação de Responsabilidades**: Lógica de caminhos em utilitários separados
2. **Reutilização**: Funções utilitárias centralizadas
3. **Consistência**: Padrão uniforme para todas as traduções
4. **Manutenibilidade**: Código bem documentado e organizado
5. **Performance**: Detecção eficiente de links ativos

## Adicionando Novas Traduções

1. Adicione a chave nos três arquivos de mensagem (`pt.json`, `en.json`, `es.json`)
2. Use a chave no componente com `t('nova_chave')`
3. Para URLs, use `createLocalizedPath('/nova-rota', locale)`

## Componentes Internacionalizados

### Botões e CTAs

- **View Demo**: `t('view_demo')` - Botão para visualizar demonstração
- **Get in Touch**: `t('get_in_touch')` - Botão de contato principal

### Seção de Ajuda

- **Título**: `t('need_help_title')` - "Precisa de ajuda?"
- **Subtítulo**: `t('need_help_subtitle')` - "Sinta-se à vontade para nos contatar"
- **Descrição**: `t('mission_description')` - Texto sobre a missão da empresa

### Textos de Fallback

- **Serviços**: `t('business_process_optimization_fallback')` - Texto padrão para serviços
- **Portfólio**: `t('portfolio_fallback')` - Texto padrão para portfólio
- **Contato**: `t('contact_fallback')` - Texto padrão para contato

## Exemplo de Adição de Nova Página

```javascript
// 1. Adicionar nas traduções
// pt.json
"nova_pagina": "Nova Página"

// en.json
"nova_pagina": "New Page"

// es.json
"nova_pagina": "Nueva Página"

// 2. Usar no componente
<Link href={createLocalizedPath('/nova-pagina', locale)}>
  {t('nova_pagina')}
</Link>
```

## Testes de Funcionamento

### Verificação Automática

O sistema foi testado e verificado para funcionar corretamente em todos os idiomas:

- ✅ **Português**: `/pt` - "Ver demonstração", "Entre em contato", "Precisa de ajuda?"
- ✅ **Inglês**: `/en` - "View demo", "Get in touch", "Need help?"
- ✅ **Espanhol**: `/es` - "Ver demostración", "Ponte en contacto", "¿Necesitas ayuda?"

### Como Testar

```bash
# Testar em português
curl http://localhost:3000/pt | grep "Ver demonstração"

# Testar em inglês
curl http://localhost:3000/en | grep "View demo"

# Testar em espanhol
curl http://localhost:3000/es | grep "Ver demostración"
```
