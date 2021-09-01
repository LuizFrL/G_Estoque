const corpoTabela = $(".tabela-corpo")
$(".botao-ajuda").click(adicionarLinha)
var cont = 0006


function adicionarLinha() {
    cont += 1
    const conteudo = `
    <tr class="tabela-linha">
              <th class="tabela-item" scope="row">000${cont}</th>
              <td class="tabela-item">Trakinas</td>
              <td class="tabela-item">R$ 7,00</td>
              <td class="tabela-item">70 Unidades</td>
            </tr>
    `

    corpoTabela.append(conteudo)
}