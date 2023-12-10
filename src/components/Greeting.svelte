<script>
    const currentTime = new Date()
    const currentHour = currentTime.getHours()

    let greeting = 'Good morning'

    if (currentHour > 12 && currentHour < 18) {
        greeting = 'Good afternoon'
    } else if (currentHour >= 18 && currentHour < 24) {
        greeting = 'Good evening'
    }
</script>
<h2 class="text-3xl font-bold">{greeting}</h2>