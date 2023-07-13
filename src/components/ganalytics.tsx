const GAnalytics = () => {
    return (

<>
 {/* Global Site Tag (gtag.js) - Google Analytics */}
 <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-XZ07GVRNVQ`}
          />
<script
dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XZ07GVRNVQ', {
              page_path: window.location.pathname,
            });
          `,
            }}
/>
</>
    )
}
    
export default GAnalytics