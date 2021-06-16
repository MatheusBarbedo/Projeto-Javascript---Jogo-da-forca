const criaJogo = sprite => {
    let etapa = 1;
    let lacunas = [];
    let palavraSecreta = "";

    const criaLacunas = () => {
        for (let i = 0; i < palavraSecreta.length; i++) {
            lacunas.push("");
        }
    };

    const proximaEtapa = () => etapa = 2;

    const setPalavraSecreta = palavra => {
        palavraSecreta = palavra;
        criaLacunas();
        proximaEtapa();
    };

    const getLacunas = () => lacunas;

    const getEtapa = () => etapa;

    const processaChute = chute => {
        const exp = new RegExp(chute, "gi");
        var resultado,
        acertou = false;

        while (resultado = exp.exec(palavraSecreta))
            acertou = lacunas[resultado.index] = chute;

        if (!acertou) sprite.nextFrame();
    };

    const ganhou = () => !lacunas.some(lacuna => lacuna == "");

    const perdeu = () => sprite.isFinished();

    const ganhouOuPerdeu = () => ganhou() || perdeu();

    const reinicia = () => {
        etapa = 1;
        palavraSecreta = "";
        lacunas = [];
        sprite.reset();
    };

    return {
        setPalavraSecreta,
        getLacunas,
        getEtapa, 
        processaChute, 
        ganhou,
        perdeu,
        ganhouOuPerdeu,
        reinicia
    };
};