import { Helmet } from 'react-helmet-async'

const SEO = ({ 
  title = 'GameZone - Premium Online Gaming Platform',
  description = 'Experience premium online gaming with GameZone. Get instant Gaming ID for cricket betting, live casino, sports betting & 5000+ games.',
  keywords = 'online gaming, cricket betting, casino games, sports betting, gaming ID',
  ogImage = 'https://www.swamiji.club/wp-content/uploads/al_opt_content/IMAGE/www.swamiji.club/wp-content/uploads/2025/05/download-2025-05-25T154726.066-1024x581.webp.bv.webp?bv_host=www.swamiji.club',
  url = 'https://gamezone.com'
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={url} />
      
      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Canonical */}
      <link rel="canonical" href={url} />
    </Helmet>
  )
}

export default SEO
