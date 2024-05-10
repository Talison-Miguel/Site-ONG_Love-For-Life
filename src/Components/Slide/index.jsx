/* eslint-disable react/prop-types */
import { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./styles.css"

import { ItemSlider } from '../ItemSlider/index.jsx';

import slide1 from '../../assets/images/slide1.jpg'
import slidephoto1 from '../../assets/images/slidephoto1.png'
import slide2 from '../../assets/images/slide2.jpg'
import slidephoto2 from '../../assets/images/slidephoto2.png'
import slide3 from '../../assets/images/slide3.jpg'
import slidephoto3 from '../../assets/images/slidephoto3.png'
import slide4 from '../../assets/images/slide4.jpg'
import slidephoto4 from '../../assets/images/slidephoto4.png'
import slide5 from '../../assets/images/slide5.jpg'
import slidephoto5 from '../../assets/images/slidephoto5.png'

export function Slide() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  const ProjectSlide = [
    {
      photo: slide1,
      smallPhoto: slidephoto1,
      title: 'Comunidade Sonhar e Viver',
      firstP: 'A ONG atende a comunidade desde 2019 com o fornecimento de leite para as crianças, distribuição de cestas básicas para a famílias e festas recreativas em datas comemorativas como festa junina, dias das crianças, Natal, etc.',
      secondP: 'O principal projeto em andamento é a construção de uma sala de informática para apoiar e incentivar os estudos das crianças e adolescentes. O projeto atende em média 100 crianças e 110 famílias.',
      city: 'Campo Limpo - SP',
    },
    {
      photo: slide2,
      smallPhoto: slidephoto2,
      title: 'Aldeia Tekoa Pyau',
      firstP: 'Realizamos ações na aldeia Tekoa Pyau no intuito de melhorar a saúde das crianças, com atendimento médico e odontológico em parceria com a ONG SAS Brasil. Os profissionais da saúde atendem não só as crianças, mas todos os familiares, realizando consultas e direcionando ao tratamento se necessário.',
      secondP: 'Contamos também com o o apoio de veterinários, pois a comunidade tem muitos animais que necessitam de acolhimento e tratamento tais como vacinas.',
      city: 'Jaraguá - SP',
    },
    {
      photo: slide3,
      smallPhoto: slidephoto3,
      title: 'Amor em movimento',
      firstP: 'O projeto une solidariedade e atividades físicas através de aulões funcionais, onde os voluntário participam das aulas e doam alimentos que são distribuídos para as comunidades atendidas pela ONG',
      secondP: 'Além de incentivar os voluntários a prática de partilhar, também incentiva a prática de atividades físicas gerando uma maior qualidade de vida',
      city: 'São Paulo - SP',
    },
    {
      photo: slide4,
      smallPhoto: slidephoto4,
      title: 'Ações emergenciais',
      firstP: 'Nesse projeto a ONG distribui sopas quentinhas, kits de higiene pessoal, calçados, roupas e mantas nas ruas do centro de São Paulo durante o inverno. Ajudando a aquecer a população de rua que não tem acesso a esses itens e sofrem com o frio intenso. São doados também brinquedos e doces para as crianças, além de fraldas e lenços umedecidos.',
      secondP: 'Todo o trabalho é realizado com muito carinho e amor, com o objetivo não somente de doar, mas de acolher a todos com amor.',
      city: 'Ruas do Centro de São Paulo',
    },
    {
      photo: slide5,
      smallPhoto: slidephoto5,
      title: 'Ocupações/Comunidades',
      firstP: 'A ONG atende outros locais em ações esporádicas, onde temos crianças em situação de vulnerabilidade. Com a doação de brinquedos, kit de doces, roupas e leite. Sempre fazendo uma grande festa com recreação, atividades lúdicas e muita troca de amor entre os voluntários e as crianças.',
      secondP: 'Em 2023 a ONG atendeu mais de 6 comunidades, com cerca de 1000 crianças beneficiadas.',
      city: 'São Paulo - SP',
    },
]

  return (
    <>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          {
            ProjectSlide.map((item, index) => (
              <div className="keen-slider__slide number-slide1 number-slide" key={index}><ItemSlider {...item}/></div>
            ))
          }
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            )
          })}
        </div>
      )}
    </>
  )
}

function Arrow(props) {
  const disabled = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  )
}
