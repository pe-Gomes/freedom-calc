`em desenvolvimento`

## Começando

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) com o seu navegador para ver o resultado.

## O Problema

Os operadores do direito brasileiro, sobretudo aqueles que lidam com o direito penal, lidam quase que diariamente com cálculos envolvendo datas.

O sistema penal brasileiro define que as penas serão aplicadas em `X` anos, `Y` meses e `Z` dias. Assim advogados, promotores, familiares e apenados devem se virar fazendo complexos cálculos sobre datas.

Além disso, para que o apenado possa sair do regime fechado para o aberto, deverá cumprir um mínimo de tempo de pena, conforme previsto no Lei de Execução Penal, sendo que essa quantidade de pena está definida em porcentagem ou fração nas Leis brasileiras.

Pensando nisso, a calculadora pretende facilitar a vida do operador de direito, trazendo a seguinte funcionalidade:

* Informar, a partir das datas informadas, quando encerrará o cumprimento da pena.
* Calcular quando o apenado poderá progredir de regime, levando em consideração a fração informada pelo usuário.
* Incluir no cálculo os dias de remição de pena, previstos na lei.
* Calcular os prazos de prescrição, a partir dos marcos temporais informados.