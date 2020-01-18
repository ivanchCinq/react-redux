# Counter React-Reducer

## Arquivos

### counter.js
* Componente
* `mapStateToProps` => mapeia o estado (variáveis ou objetos) do **Reducer** para os props que o componente irá acessar
* `mapDispatchToProps` => mapeia o dispatch (funções) do **Reducer** para os props que o componente irá acessar

### counterActions.js
* Contém as funções que fazem acontecer
* Funções devem retornar:
  * `type`: O que aconteceu
  * `payload`: Informações adicionais

### counterReducer.js
* Contém o estado inicial
* Contém o que acontece na mudança de estado

## Ciclo de vida

1. Ação acontece
2. Função do **actions** é chamada (Dispatcher)
3. Manda informações para o **reducer**
4. Reducer irá mudar o **State**
5. Componente(s) será(ão) atualizado(s)

![Rect-Redux lifecycle](assets/redux-lifecycle.png)