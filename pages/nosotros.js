import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Nosotros.module.css'

const Nosotros = () => {
  return (
    <div>
        <Layout pagina='Nosotros'>
            <main className='contenedor'>
                <h2 className='heading'>Nosotros</h2>
                <div className={styles.contenido}>
                  <Image layout='responsive' width={600} height={450} src="/img/nosotros.jpg" alt='Imagen sobre nosotros' />

                  <div>
                    <p>Nunc sodales lorem non laoreet molestie. Donec consequat metus eget vestibulum tristique.
                       Morbi commodo consectetur congue. Fusce ornare congue eros nec dictum. Nullam eu diam ante.
                       Etiam sodales turpis vitae nunc finibus feugiat. Orci varius natoque penatibus et magnis dis
                       parturient montes, nascetur ridiculus mus. Aliquam pretium hendrerit leo, in accumsan est
                       imperdiet id. Fusce commodo mi lectus, vel consectetur neque maximus nec. Morbi ex felis, 
                       rhoncus vitae libero a, faucibus facilisis ante. Vestibulum non libero dignissim, lobortis felis 
                       at, congue nisi. Integer feugiat eleifend quam, non vehicula neque volutpat id.</p>

                    <p>Nunc sodales lorem non laoreet molestie. Donec consequat metus eget vestibulum tristique.
                    Morbi commodo consectetur congue. Fusce ornare congue eros nec dictum. Nullam eu diam ante.
                    Etiam sodales turpis vitae nunc finibus feugiat. Orci varius natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus mus. Aliquam pretium hendrerit leo, in accumsan est
                    imperdiet id. Fusce commodo mi lectus, vel consectetur neque maximus nec. Morbi ex felis, 
                    rhoncus vitae libero a, faucibus facilisis ante. Vestibulum non libero dignissim, lobortis felis 
                    at, congue nisi. Integer feugiat eleifend quam, non vehicula neque volutpat id.</p>
                  </div>
                </div>
            </main>
        </Layout>
    </div>
  )
}

export default Nosotros