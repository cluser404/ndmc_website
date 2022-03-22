<script>
    import Banner from "../components/Banner.svelte";
</script>

<svelte:head>
    <!--Parmanent Marker Font-->
    <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet">

    <title>NDMC | Homepage</title>
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