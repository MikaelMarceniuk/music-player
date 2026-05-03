# Project Context: Audio Player & Media Importer App

## 1. Visão Geral do Projeto
Aplicativo mobile cross-platform (iOS e Android) construído para atuar publicamente como um gerenciador e reprodutor de áudio local. O design prioriza uma experiência utilitária e limpa. O projeto adota uma arquitetura desacoplada, separando o cliente mobile de um microserviço backend planejado para lidar com a extração e conversão de mídia da web.

## 2. Stack Tecnológico & Arquitetura
- **Frontend App:** React Native, TypeScript.
- **Engine de Áudio:** `react-native-track-player` (para background audio, lock screen controls e metadados).
- **Gerenciamento de Arquivos:** Bibliotecas de File System nativas (`react-native-fs` ou `expo-file-system`) para leitura e escrita no diretório de documentos.
- **Backend (V2):** Node.js atuando como worker/microserviço.
- **Processamento de Mídia (Backend):** Integração com `yt-dlp` e `ffmpeg` para extração de streams e demuxing para MP3.

## 3. Fases de Desenvolvimento (Roadmap)
### V1: Core Offline Player (MVP)
- Implementação da interface visual (UI/UX).
- Varredura, listagem e reprodução de arquivos de áudio locais.
- Implementação de controles nativos (background e fone de ouvido).
- Criação e gerenciamento de playlists em banco de dados local (ex: MMKV, SQLite ou WatermelonDB).

### V2: Serviço de Importação (Hidden Feature para Lojas)
- Levantamento do servidor Node.js.
- Interface de importação mascarada como "Adicionar via URL Web" para garantir compliance com a App Store e Google Play.
- Fluxo de rede: React Native envia URL -> Servidor Node.js valida, baixa, extrai o áudio e converte -> React Native faz o download do MP3 gerado e salva no armazenamento local.

## 4. Diretrizes de UI/UX
- **Estética Principal:** Clean & Utilitário. Foco em legibilidade, familiaridade com componentes nativos dos sistemas operacionais e ausência de distrações.
- **Identidade Visual:** Cor primária focada em um tom de **Azul** (para botões de ação, itens ativos na tab bar e sliders de progresso). Suporte nativo a Light/Dark mode.
- **Navegação:** Bottom Tab Bar simples e direta.
- **Mini Player Persistente:** Componente fixo exibido acima da Bottom Tab Bar em todas as abas sempre que houver uma faixa ativa. Não é uma tela — é uma camada global de UI.

## 5. Especificações de Telas

### Tab 1: Dashboard (Início)
- Foco em acesso rápido ao conteúdo mais relevante.
- **Últimas músicas tocadas:** Implementado como um carrossel horizontal de cards (destaque visual para a artwork).
- **Playlists mais tocadas:** Lista vertical ou grid de cards retangulares empilhados para facilitar o clique com uma única mão.

### Tab 2: Tela de Biblioteca (Músicas)
- Listagem raw e completa de todos os áudios importados/disponíveis no aparelho.
- Componente de lista otimizado (FlatList/FlashList) com suporte a milhares de itens sem queda de framerate.
- UI do item: Thumbnail à esquerda, Título (bold, 1 linha) e Subtítulo (cinza, duração/origem).

### Tab 3: Tela de Playlists
- Visão de coleções gerenciadas pelo usuário.
- Fluxo para criar novas playlists e gerenciar a ordem das faixas dentro de cada uma.

### Tela de Detalhes da Playlist
- Acessada ao tocar em qualquer playlist na Tab 3 ou no Dashboard.
- Exibe header com artwork da playlist (gerada a partir das capas das faixas, ou customizável), nome e contagem de faixas.
- Lista ordenada das faixas com suporte a drag-and-drop para reordenação.
- Ações por faixa: remover da playlist, mover para outra playlist, tocar a partir daqui.
- Botões de ação globais: "Tocar tudo" e "Shuffle".

### Tela de Reprodução (Now Playing)
- Tela principal de interação com a faixa em execução. Acessada ao expandir o Mini Player ou ao tocar diretamente em uma faixa.
- **Artwork:** Exibição em destaque, centralizada e em tamanho grande. Animação sutil ao trocar de faixa (fade ou slide).
- **Metadados:** Título (bold, 1 linha com scroll automático se necessário) e artista/origem logo abaixo.
- **Barra de progresso:** Slider arrastável com timestamps de posição atual e duração total.
- **Controles principais:** Voltar faixa, Play/Pause (botão central maior), Avançar faixa.
- **Controles secundários:** Shuffle, Repeat (off / repeat all / repeat one), botão de fila.
- **Fila de reprodução (Queue):** Acessível via botão ou swipe, exibindo as próximas faixas na ordem de reprodução com possibilidade de reordenar ou remover.

### Tela de Configurações
- Acessada via ícone na header do Dashboard ou como tab extra, a definir.
- **Áudio:** Configurações de qualidade, comportamento ao plugar/desplugar fone de ouvido (pausar automaticamente), fade entre faixas.
- **Aparência:** Forçar tema claro ou escuro (override do sistema), escolha de cor de destaque (azul como padrão).
- **Armazenamento:** Visualização do espaço ocupado pelos arquivos de áudio, opção para limpar cache de artworks.
- **Biblioteca:** Reescanear arquivos locais manualmente, definir pastas monitoradas.
- **Sobre:** Versão do app, informações do projeto.

## 6. Componente Global: Mini Player Persistente
- Renderizado acima da Bottom Tab Bar em todas as telas enquanto houver uma faixa carregada (mesmo que pausada).
- **Conteúdo:** Thumbnail da faixa, título (truncado), artista, botão Play/Pause e botão de avançar faixa.
- **Interação:** Toque no mini player expande para a Tela de Reprodução (Now Playing). Swipe horizontal pode trocar de faixa. Swipe para baixo pode dispensar (a definir comportamento).
- **Animação:** Aparece com slide-up ao iniciar a primeira reprodução da sessão. Desaparece com slide-down ao encerrar a fila completamente.
- **Implementação:** Gerenciado globalmente via contexto/estado do `react-native-track-player`, sem recriar o componente ao navegar entre abas.
