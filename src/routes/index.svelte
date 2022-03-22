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
company_name={"Notore Dame Math Club"}
cta_text={"JOIN NDMC"}
cta_link={"https://facebook.com/page/ndmc"}
social_links={[
    {iconName: "paper-plane", link: "https://telegram.com/"},
    {iconName: "logo-facebook", link: "https://facebook.com/"},
    {iconName: "logo-discord", link: "https://discord.com/"},
    ]}
/>