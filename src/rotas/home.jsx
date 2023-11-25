import {} from "react";
import style from "../estilos/home/home.module.css"

function Home(){
    return(
        <>
            <div className={style.container}>
                <div className={style.header}>
                    <div>
                    </div>
                </div>
                <div className={style.tema}>
                    <div>
                        <img src='../src/img/coracao.png'alt="tema"></img>
                    </div>
                    <div className={style.nome_soluçao}>
                        <div>
                            <h1>HeartCare</h1>
                        </div>
                        <div className={style.texto}>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div className={style.solucao}>
                    <div>
                        <h2>Solução</h2>
                        <p1>O sistema HeartCare oferece uma solução abrangente e acessível para o gerenciamento de dados relacionados à saúde de idosos. Através de uma interface simples, os usuários podem cadastrar novos idosos, visualizar dados específicos, monitorar o histórico de batimentos cardíacos e obter recomendações personalizadas de exercícios. A funcionalidade de salvar os dados imediatamente após cada cadastro garante a integridade das informações, enquanto a verificação da existência do arquivo proporciona uma camada adicional de controle. Com uma abordagem centrada no usuário e a capacidade de evoluir com futuras melhorias, o Heart Care se destaca como uma solução eficaz para o acompanhamento e promoção da saúde de idosos.</p1>
                    </div>
                    <div>
                        <h2>Por que?</h2>
                        <p1>O projeto HeartCare foi concebido com o objetivo de fornecer uma ferramenta prática e acessível para o gerenciamento de informações relacionadas à saúde de idosos. Diante da crescente importância de cuidados personalizados e preventivos, a solução busca oferecer uma abordagem simples e eficaz, permitindo o cadastro de dados pessoais, monitoramento de batimentos cardíacos e a obtenção de recomendações de exercícios personalizadas. O principal propósito é proporcionar aos usuários uma maneira fácil e centralizada de acompanhar e promover a saúde cardiovascular, contribuindo assim para um envelhecimento ativo e saudável.</p1>
                    </div>
                    <div>
                        <h2>Funcionamento</h2>
                        <p1>O funcionamento do projeto HeartCare baseia-se na integração de uma pulseira especializada para medição dos batimentos cardíacos (BPM) dos usuários. Cada idoso cadastrado é associado a uma pulseira única, que coleta e transmite dados em tempo real para o sistema. Durante o cadastro, são registrados o nome, a idade e o identificador da pulseira. Ao escolher a opção de visualizar dados, os usuários podem acessar informações detalhadas, incluindo o histórico de batimentos cardíacos registrado pela pulseira. A funcionalidade de cadastro, aliada à monitoração contínua dos BPM, proporciona uma abordagem holística ao cuidado da saúde dos idosos, permitindo uma análise mais completa e personalizada do estado cardiovascular de cada indivíduo. Este enfoque inovador visa promover a conscientização e a adoção de hábitos saudáveis, contribuindo para a melhoria da qualidade de vida dos usuários.</p1>
                    </div>
                </div>
                <div className={style.vantagem}>
                    <div>
                        <h2>Vantagem</h2>
                        <p1>A utilização da pulseira HeartCare apresenta vantagens substanciais no monitoramento da saúde de idosos. Ao fornecer uma medição contínua e em tempo real dos batimentos cardíacos, a pulseira permite uma análise detalhada e imediata da saúde cardiovascular, possibilitando a detecção precoce de eventuais irregularidades. Sua facilidade de uso e discrição garantem comodidade aos usuários, enquanto a automatização da coleta de dados simplifica o processo de monitoramento diário. A integração da pulseira ao sistema Heart Care facilita a gestão centralizada dos dados, garantindo um histórico preciso e organizado dos batimentos cardíacos ao longo do tempo. Essa abordagem proativa e personalizada visa não apenas monitorar, mas também promover a saúde cardiovascular, contribuindo para uma melhor qualidade de vida dos usuários idosos.</p1>
                    </div>
                </div>
            </div>
        </>
    )
}
 
export  default Home