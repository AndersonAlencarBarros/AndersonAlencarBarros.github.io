export const linuxIntroHTML = `
<div id='write'  class=''><h1 id='linux-introdução-ao-sistema-operacional'><span>Linux: Introdução ao sistema operacional</span></h1><p><em><span>Anderson de Alencar Barros</span></em></p><h2 id='comandos-iniciais'><span>Comandos Iniciais</span></h2><ul><li><code>ls</code><span> lista diretórios e arquivos</span></li><li><code>ls -l</code><span> lista longa com detalhes</span></li><li><code>ls -s</code><span> lista com o tamanho alocado de cada arquivo  </span></li><li><code>ls -a</code><span> exibe arquivos e diretórios ocultos</span></li><li><code>ls &lt;dir&gt;</code><span> lista diretório dado</span></li><li><code>history</code><span> histórico de comandos</span></li><li><code>mkdir</code><span> cria diretório</span></li><li><code>rm</code><span> remover</span></li><li><code>rm -f</code><span> remove forçadamente, ignorando arquivos não existentes ou argumentos</span></li><li><code>rm -r</code><span> remove diretórios recursivamente</span></li><li><code>rm -rf</code><span> remover diretórios não vazios</span></li><li><code>rmdir</code><span> remover diretórios vazios</span></li><li><code>cd &lt;dir&gt;</code><span> muda diretório</span></li><li><code>~</code><span> pasta pessoal home</span></li><li><code>.</code><span> pasta atual</span></li><li><code>cd ..</code><span> retorna ao diretório anterior</span></li><li><code>--help</code><span> exibe arquivo de ajuda</span></li><li><code>man</code><span> manual do comando</span></li><li><code>mv</code><span> mover </span></li><li><code>mv -i</code><span> confirmar antes de substituir</span></li><li><code>mv -n</code><span> sem substituição </span></li><li><code>mv -b</code><span> substituição pelo backup </span></li><li><code>mv -u</code><span> substitua se o arquivo de destino for antigo ou não existir</span></li><li><code>mv &lt;nome_antigo&gt; &lt;nome_novo&gt;</code><span> renomeia um arquivo</span></li><li><code>cp</code><span> copiar</span></li><li><code>cp -i</code><span> copia, porém verifica se o arquivo já existe</span></li><li><code>cp -v</code><span> exibe uma saída</span></li><li><code>cp -r</code><span> copia diretórios</span></li><li><code>cp -l</code><span> cria hard links </span></li><li><code>cp -s</code><span> cria links simbólicos</span></li><li><code>cp -u</code><span> copia apenas quando o arquivo de destino for antigo ou não existir</span></li><li><code>clear</code><span> limpa terminal ou </span><code>CTRL + L</code></li><li><code>exit</code><span> sai do terminal </span></li></ul><h2 id='comandos-para-manipulação-de-arquivos-e-textos-e-redirecionamento'><span>Comandos para manipulação de arquivos e textos e redirecionamento</span></h2><ul><li><code>nano</code><span> é o editor do texto do terminal do Ubuntu</span></li><li><code>cat</code><span> imprime o arquivo .txt em ordem normal</span></li><li><code>tac</code><span> imprime o arquivo .txt em ordem inversa</span></li><li><code>head</code><span> imprime as primeiras 10 linhas de um ou mais arquivos</span></li><li><code>tail</code><span> imprime as últimas 10 linhas de um ou mais arquivos</span></li><li><code>cal</code><span> mostra o calendário</span></li><li><code>cal 2020</code><span> mostra o calendário do ano de 2020 </span></li><li><code>cal december 2020</code><span> mostra o calendário do ano de 2020 e o mês de dezembro </span></li><li><code>date</code><span> mostra a data e horário</span></li><li><code>!!</code><span> repete o último comando</span></li><li><code>&gt;&gt;</code><span> adiciona uma informação a um arquivo de texto</span></li><li><code>grep</code><span> faz uma busca por um termo dentro do texto</span></li><li><code>|</code><span> serve para usar mais de um comando</span></li><li><code>| more</code><span> ou </span><code>| less</code><span> servem para o arquivo ficar paginado, sem exibir totalmente</span></li><li><code>&amp;</code><span> executa dois ou mais comandos com saídas separadas</span></li><li><code>&amp;&amp;</code><span> executa dois ou mais comandos em sequência com as saídas unidas</span></li><li><code>file</code><span> mostra o tipo de arquivo ou pasta</span></li><li><code>whatis</code><span> mostra o que faz determinado comando</span></li><li><code>find</code><span> busca um arquivo em um diretório</span></li><li><code>find &lt;dir&gt; -type f -name &lt;nome&gt;</code><span> busca um arquivo (</span><code>-type f</code><span>) em um diretório, o nome pode ser um padrão em Regex</span></li><li><code>find &lt;dir&gt; -type d -name &lt;nome&gt;</code><span> busca por um diretório (</span><code>-type d</code><span>)</span></li><li><code>touch</code><span> cria arquivos vazios </span></li><li><code>echo</code><span> imprime algo na saída</span></li></ul><h2 id='diretórios-do-linux-e-comandos-de-sistema'><span>Diretórios do Linux e Comandos de Sistema</span></h2><h3 id='diretórios'><span>Diretórios</span></h3><ul><li><code>/</code><span> É o diretório raiz, todos os demais diretórios estão abaixo dele.</span></li><li><code>/bin</code><span> Contém arquivos programas do sistema que são usados com frequência pelos usuários.</span></li><li><code>/boot</code><span> Arquivos estáticos e gerenciador de inicialização.</span></li><li><code>/dev</code><span> Arquivos de dispositivos (periféricos).</span></li><li><code>/etc</code><span> Arquivos de configuração do sistema, específicos da máquina.</span></li><li><code>/home</code><span> Contém os diretórios dos usuários.</span></li><li><code>/lib</code><span> Bibliotecas essenciais compartilhadas e módulos do kernel.</span></li><li><code>/mnt</code><span> Ponto de montagem para montar um sistema de arquivos temporariamente.</span></li><li><code>/proc</code><span> Diretório virtual de informações do sistema.</span></li><li><code>/root</code><span> Diretório home do usuário root.</span></li><li><code>/sbin</code><span> Diretório de programas usados pelo super usuário root, para administração e controle do funcionamento do sistema.</span></li><li><code>/tmp</code><span> Arquivos temporários.</span></li><li><code>/usr</code><span> Contém a maior parte de seus programas. Normalmente acessível somente como leitura.</span></li><li><code>/var</code><span> Dados variáveis, como: arquivos e diretórios de spool, dados de administração e login, e arquivos transitórios.</span></li><li><code>/opt</code><span> Aplicativos adicionais e pacotes de softwares.</span></li></ul><h3 id='comandos-e-arquivos-do-sistema'><span>Comandos e arquivos do sistema</span></h3><ul><li><code>/proc/cpuinfo</code><span> contém todas as informações da CPU</span></li><li><code>/proc/meminfo</code><span> contém todas as informações da memória</span></li><li><code>/etc/passwd</code><span> contém todos os usuários do sistema</span></li><li><code>lspci</code><span> mostra informações dos dispositivos PCI </span></li><li><code>lsusb</code><span> mostra informações dos dispositivos USB</span></li><li><code>lscpu</code><span> mostra informações do CPU</span></li><li><code>lshw</code><span> mostra de todo hardware que encontrar</span></li><li><code>lshw -short</code><span> mostra de todo hardware que encontrar resumidamente</span></li><li><code>arch</code><span> mostra qual a arquitetura do computador</span></li><li><code>uname</code><span> mostra o nome do kernel</span></li><li><code>uname -r</code><span> mostra a versão do kernel</span></li><li><code>uname -m</code><span> mostra a arquitetura do kernel</span></li><li><code>free</code><span> mostra a memória física e a memória swap</span></li><li><code>du -h</code><span> estima o espaço ocupado por um diretório </span></li></ul><h2 id='fundamentos-de-rede-e-comandos-de-rede'><span>Fundamentos de Rede e Comandos de Rede</span></h2><blockquote><p><span>Rede de computadores é um conjunto de equipamentos interligados de maneira a trocarem informações e recursos.</span></p></blockquote><h3 id='tipos-de-redes'><span>Tipos de Redes</span></h3><ul><li><strong><span>Rede WAN</span></strong><span>, Wide Area Network ou World Area Network é uma rede geograficamente distribuída.</span></li><li><strong><span>Rede MAN</span></strong><span>, Metropolitan Area Network, é uma rede metropolitana que interligam várias redes locais.</span></li><li><strong><span>Rede LAN</span></strong><span>, Local Area Network, é uma rede local de uma forma geral em um único prédio, uma casa ou campus.</span></li></ul><h3 id='protocolos'><span>Protocolos</span></h3><p><strong><span>Protocolo</span></strong><span> é uma linguagem usada pelos dispositivos de uma rede de modo que eles consigam se entender.</span></p><ul><li><span>IP são números que identificam seu computador em uma rede.</span></li><li><span>ICMP (Internet Control Message Protocol) tem o objetio prover mensagens de controle na comunicação entre nós.</span></li><li><span>DNS (Domain Name Server) é um protocolo de aplicação que tem por função identificar endereços IP e manter uma tabela com endereços dos caminhos da rede.</span></li></ul><h3 id='interface-de-rede'><span>Interface de Rede</span></h3><p><span>Interface de Rede são softwares ou hardware que faz comunicação em uma rede.</span></p><p><span>As interfaces de rede no Linux estão em </span><code>/dev</code><span> e a maioria é criada dinamicamente pelos softwares quando requisitadas.</span></p><p><span>Exemplo: </span><code>eth0</code><span> placa de rede ethernet, </span><code>loopback</code><span> permite fazer conexões com si mesmo, permitindo testar programas de rede sem precisar interferir na sua rede, por padrão, tem endereço IP </span><code>127.0.0.1</code><span>.</span></p><h4 id='comandos'><span>Comandos</span></h4><ul><li><code>ifconfig</code><span> mostra detalhes da redes ativas além de configurar as interfaces de rede</span></li><li><code>hostname</code><span> mostra informações do host, o nosso computador na rede</span></li><li><code>hostname -i</code><span> exibe IP do loopback</span></li><li><code>hostname -I</code><span> mostra o IP do computador</span></li><li><code>w</code><span> mostra informações do usuário na rede</span></li><li><code>who</code><span> mostra como estamos logados</span></li><li><code>whoami</code><span> mostra o nome do usuário logado na rede</span></li><li><code>whois</code><span> traz várias informações sobre dado host, como dono, DNS, contato, e-mail e etc</span></li><li><code>ping</code><span> mostra se o host está ativo. Envia um pacote de requisição para o host e recebe as respostas</span></li><li><code>dig</code><span> mostra informações sobre DNS</span></li><li><code>dig +short</code><span> mostra o IP do host dado</span></li><li><code>traceroute</code><span> traçar a rota até determinado host, mostrando informações dos nós até o host dado</span></li><li><code>finger</code><span> traz informações detalhadas do usuário logado</span></li></ul><h2 id='fuçando-no-linux-com-comandos-diversos'><span>Fuçando no Linux com comandos diversos</span></h2><ul><li><code>history -c</code><span> limpa o histórico de comandos</span></li><li><code>alias</code><span> cria atalhos para comandos</span></li><li><code>nl</code><span> exibe o arquivo com o número de linhas </span></li><li><code>wc</code><span> exibe linhas, palavras, e letras de um arquivo</span></li><li><code>wc -l</code><span> mostra o número de linhas, conta as linhas em branco </span></li><li><code>wc -w</code><span> conta o número de palavras de um arquivo</span></li><li><code>cmp</code><span> compara arquivos </span></li><li><code>diff</code><span> compara arquivos e exibe o arquivo</span></li><li><code>sort -n</code><span> ordena as linhas de um arquivo, em ordem numérica</span></li><li><code>last reboot</code><span> exibe todas as informações de reinicialização do sistema</span></li><li><code>route -n</code><span> mostra todas as tabelas de roteamento IP</span></li><li><code>time</code><span> mostra o tempo de um processo</span></li><li><code>uptime</code><span> mostra por quanto tempo o sistema está rodando</span></li><li><code>cowsay</code><span> exibe uma vaquinha que fala</span></li><li><code>cmatrix</code><span> exibe as letrinhas de Matrix</span></li><li><code>init 0</code><span> desliga a máquina</span></li><li><code>telinit 0</code><span> desliga a máquina</span></li><li><code>halt</code><span> desliga a máquina, todavia com autenticação</span></li><li><code>seq inicio fim</code><span> exibe uma sequência de números </span></li><li><code>whereis</code><span> exibe o caminho do programa e seu manual</span></li><li><code>which</code><span> exibe o local de um comando a ser executado no ambiente atual</span></li></ul><h2 id='controle-de-usuários-grupos-e-permissões'><span>Controle de usuários, grupos e permissões</span></h2><h4 id='usuários'><span>Usuários</span></h4><ul><li><code>adduser &lt;nome_usuario&gt;</code><span> adiciona novo usuário, só o root pode adicionar usuários</span></li><li><code>su &lt;nome_usuario&gt;</code><span> muda de usuário</span></li><li><code>passwd &lt;nome_usuario&gt;</code><span> muda a senha de um usuário</span></li><li><code>lastlog</code><span> exibe informações de login de todos os usuários</span></li><li><code>last</code><span> listagem de entrada e saída de usuários no sistema</span></li><li><code>logname</code><span> exibe nome do usuário atual logado no sistema</span></li></ul><h4 id='grupos'><span>Grupos</span></h4><ul><li><code>id</code><span> exibe os identificadores do usuário e a que grupo pertence</span></li><li><code>/etc/passwd</code><span> já dito anteriormente, contém todos os usuários do sistema</span></li><li><code>/etc/group</code><span> contém todos os grupos do sistema</span></li><li><code>userdel -r &lt;nome_usuario&gt;</code><span> remove um usuário e sua pasta pessoal</span></li><li><code>groups</code><span> exibe todos os grupos que o usuário pertence</span></li><li><code>addgroup</code><span> cria um grupo</span></li><li><code>adduser &lt;nome_usuario&gt; &lt;grupo&gt;</code><span> adiciona um usuário a um grupo</span></li><li><code>gpasswd -a &lt;nome_usuario&gt; &lt;grupo&gt;</code><span> também adiciona um usuário a um grupo</span></li><li><code>gpasswd -d &lt;nome_usuario&gt; &lt;grupo&gt;</code><span> remove o usuário de um grupo</span></li><li><code>groupdel &lt;grupo&gt;</code><span> remove um grupo</span></li></ul><h4 id='permissões'><span>Permissões</span></h4><p><span>As permissões são divididas em 3 partes: o dono, grupo e outros cada um com 3 caracteres. Por exemplo, </span><code>drwxr-xr-x</code><span> mostra que nesse diretório o dono tem permissão </span><code>rwx</code><span>,  o grupo </span><code>r-x</code><span> e os outros </span><code>r-x</code><span>. As letras indicam as permissões e o traço uma restrição, sendo </span><code>r</code><span> para ler, </span><code>w</code><span> para escrever e </span><code>x</code><span> para executar.</span></p><ul><li><code>ls -lh</code><span> exibe as permissões em um diretório</span></li></ul><h5 id='comando-chmod-modo-arquivo-e-o-modo-octal'><span>Comando </span><code>chmod &lt;modo&gt; &lt;arquivo&gt;</code><span> e o Modo Octal</span></h5><p><span>O comando </span><code>chmod</code><span> altera as permissões de um arquivo ou diretório, sendo possível definir permissões para cada uma das partes, o dono, grupo e outros.</span></p><ul><li><span>Um número é definido para cada grupo</span></li><li><span>0 representa uma restrição</span></li><li><span>Para mais de uma permissão soma-se ambos. Por exemplo, para execução e escrita em um arquivo qualquer para apenas o dono faz da seguinte maneira, </span><code>chmod 300 &lt;arquivo&gt;</code><span>, como também 777 daria todas as permissões possíveis</span></li></ul><h2 id='compactação-descompactação-e-arquivamento'><span>Compactação, descompactação e arquivamento</span></h2><ul><li><code>gzip &lt;arquivo&gt;</code><span> compactador com taxa excelente de compactação, o arquivo original deixa de existir</span></li><li><code>gzip -9 &lt;arquivo&gt;</code><span> compactação com grau máximo</span></li><li><code>gunzip &lt;arquivo&gt;</code><span> para descompactar um arquivo </span><em><span>.gz</span></em></li><li><code>zip &lt;arquivo.zip&gt; &lt;arquivo&gt;+</code><span> compactador, porém mantém o arquivo original e pode ser colocado vários arquivos</span></li><li><code>unzip &lt;arquivo.zip&gt;</code><span> para descompactar um arquivo </span><em><span>.zip</span></em></li><li><code>bzip2 &lt;arquivo&gt;</code><span> compactador mais atual que o </span><code>gzip</code><span> e </span><code>zip</code><span>, o arquivo original deixa de existir</span></li><li><code>bzip2 -d &lt;arquivo.bz2&gt;</code><span> para descompactar um arquivo </span><em><span>.bz2</span></em></li><li><code>rar a &lt;arquivo.rar&gt; &lt;arquivo&gt;+</code><span> gera um arquivo </span><em><span>.rar</span></em><span> e pode ser usado com vários arquivos</span></li><li><code>rar x &lt;arquivo.rar&gt;</code><span> para descompactar um arquivo </span><em><span>.rar</span></em></li></ul><h4 id='arquivadores'><span>Arquivadores</span></h4><p><span>Junta vários arquivos em um só. Pode ser usado em conjunto com um compactador para armazenar arquivos compactados. Um dos mais conhecidos é o </span><em><span>.tar</span></em><span>.</span></p><ul><li><code>tar -cf &lt;arquivo.tar&gt; &lt;arquivo&gt;+</code><span> cria um arquivo </span><em><span>.tar</span></em><span> com um ou mais arquivos. </span></li><li><code>tar -xvf &lt;arquivo.tar.gz&gt;</code><span> descompacta um arquivo </span><em><span>.tar.gz</span></em><span>, ou seja, um arquivo que foi empacotado com </span><code>tar</code><span> e em seguida, compactado com </span><code>gzip</code></li><li><code>tar -xvf &lt;arquivo.tar.gz&gt; -C &lt;dir&gt;</code><span> extrai para outro diretório</span></li></ul><h2 id='gerenciamento-de-pacotes'><span>Gerenciamento de pacotes</span></h2><p><strong><span>Pacotes</span></strong><span> são programas colocados dentro de um arquivo identificados por sua extensão e incluem arquivos necessários para sua instalação, como </span><em><span>.deb</span></em><span>, </span><em><span>.rpm</span></em><span> e outros.</span></p><p><strong><span>Gerenciadores de Pacotes</span></strong><span> são sistemas que possuem resolução automática de dependências entre pacotes, método fácil de instalação de pacotes, como dpkg, apt, yum.</span></p><ul><li><code>sudo apt install &lt;pacote&gt;</code><span> instala e atualiza um pacote</span></li><li><code>sudo apt upgrade &lt;pacote&gt;</code><span> atualiza um pacote </span></li><li><code>sudo apt remove &lt;pacote&gt;</code><span> remove um pacote </span></li><li><code>sudo apt update &amp;&amp; sudo apt upgrade</code><span> atualiza todos os pacotes </span></li></ul><h4 id='sites-de-pacotes'><span>Sites de Pacotes</span></h4><p><span>Locais onde se pode baixar pacotes</span></p><ul><li><a href='https://pkgs.org/'><span>pkgs.org</span></a></li><li><a href='http://rpm.pbone.net/'><span>rpm.pbone.net</span></a></li><li><code>sudo dpkg -i &lt;pacote.deb&gt;</code><span> instala um pacote </span><em><span>.deb</span></em><span> </span></li><li><code>sudo dpkg -I &lt;pacote.deb&gt;</code><span> obtém informações de um pacote</span></li><li><code>sudo dpkg -r &lt;pacote&gt;</code><span> remove um pacote </span><em><span>.deb</span></em><span>, usa-se o nome do pacote dado nas informações dele</span></li></ul><p><span>No Fedora,</span></p><ul><li><code>sudo rpm -ivh --nodeps &lt;pacote.rpm&gt;</code><span> instala um pacote e resolve as dependências</span></li><li><code>sudo rpm -U &lt;pacote.rpm&gt;</code><span> atualiza um pacote </span></li><li><code>sudo rpm -e &lt;pacote.rpm&gt;</code><span> remove um pacote </span></li></ul><h2 id='shell-script'><span>Shell script</span></h2><p><span>É uma interface de usuário para acessar os serviços de um sistema operacional. Script é uma linguagem de programação que executa no sistema em tempo de execução, muito usada em automação.</span></p><h4 id='variáveis-de-ambiente'><span>Variáveis de Ambiente</span></h4><ul><li><code>env</code><span> mostra as variáveis de ambiente</span></li><li><code>portfolio=~/Documents/alencarbarros.github.io/</code><span> criando uma variável de ambiente </span><code>portfolio</code><span> com um caminho</span></li><li><code>export portfolio</code><span> cria a variável de ambiente</span></li><li><code>cd $portfolio</code><span> é possível ir até esse caminho com tal variável</span></li></ul></div></div>
`