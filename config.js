// Configuração do site SolTracker.
// Depois de criar o canal no ThingSpeak, preencha o canalId e publique de novo.
window.SOLTRACKER = {
  canalId: "3570037",            // ID do canal no ThingSpeak (ex.: "2712345"). Vazio = modo demonstração
  chaveLeitura: "BH6RC4WHGMNSDFD4", // Read API Key; deixe vazio se o canal for público. NUNCA coloque a Write API Key aqui
  atualizarSegundos: 30   // Intervalo entre atualizações da página
};
