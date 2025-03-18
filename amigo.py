import random

def sortear_amigo_secreto(participantes):
    if len(participantes) < 2:
        print("É necessário pelo menos 2 participantes para realizar o sorteio.")
        return None
    
    sorteio = {}
    disponiveis = participantes[:]
    
    for participante in participantes:
        opcoes = [p for p in disponiveis if p != participante]
        
        if not opcoes:  # Caso não tenha mais opções disponíveis, refaz o sorteio
            return sortear_amigo_secreto(participantes)
        
        escolhido = random.choice(opcoes)
        sorteio[participante] = escolhido
        disponiveis.remove(escolhido)
    
    return sorteio

def main():
    participantes = []
    print("Digite os nomes dos participantes e pressione Enter após cada nome.")
    print("Quando terminar, digite 'fim'.")
    
    while True:
        nome = input("Nome: ").strip()
        if nome.lower() == 'fim':
            break
        if nome and nome not in participantes:
            participantes.append(nome)
        else:
            print("Nome inválido ou já inserido. Tente novamente.")
    
    sorteio = sortear_amigo_secreto(participantes)
    
    if sorteio:
        print("\nResultado do sorteio:")
        for participante, amigo_secreto in sorteio.items():
            print(f"{participante} -> {amigo_secreto}")

if __name__ == "__main__":
    main()
