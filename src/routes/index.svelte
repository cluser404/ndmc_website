<script>
    import Banner from "../components/Banner.svelte";
</script>

<svelte:head>
    <!--Parmanent Marker Font-->
    <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet">
    <!--meta-->
    <title>NDMC | Homepage</title>
    <!--opengraph meta-->
	<meta property="og:title" content="Notre Dame Math Club Homepage" />
    <meta property="og:description" content="NDMC is the best Math Club in Bangladesh. Notre Dame welcomed the newest member to its plethora of clubs on the 14th of March, 2017: The Notre Dame Math Club(NDMC).">
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://ndmcweb.github.io/" />
	<meta property="og:image" content="https://ndmcweb.github.io/social_cover.png" />
    <meta property="og:image:url"  content="https://ndmcweb.github.io/social_cover.png"/>
    <meta property="twitter:image" content="https://ndmcweb.github.io/social_cover.png"/>
    <meta name="twitter:card" content="summary_large_image">
</svelte:head>

<Banner
logo_url={"/content/ndmc_logo.png"} 
company_name={"Notre Dame Math Club"}
cta_text={"JOIN NDMC"}
cta_link={"https://www.facebook.com/official.ndmc/posts/4855810711183278"}
social_links={[
    {iconName: "paper-plane", link: "https://t.me/ndmc_official"},
    {iconName: "logo-facebook", link: "https://www.facebook.com/official.ndmc"},
    ]}
/>