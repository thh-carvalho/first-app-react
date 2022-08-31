import Feed from "../components/Feed"

export default function MostViewed(){
    const posts = [{
        id: Math.random(),
        content: 'content',
        userName: 'Thiago',
        publishedAt: new Date(),
    }]
    
    return (
        <main className="most-viewed">
            <Feed 
                posts={posts}
                titles="Mais vistos"
                subtitle="Acompanhe os assuntos mais comentados no momento e fique por dentro de qualquer novidade"
            />
        </main>
    )
}