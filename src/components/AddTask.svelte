<script lang="ts">

let title: string = ""
  let description: string = ""

  let isInputVisible: boolean = false

  const showTitle = () => (!isInputVisible)
  const hideTitle = () => (isInputVisible = false)

  const handleAdd = async () => {
    if([title, description].includes("")) return

    const data = {
      title,
      description
    }

    
  } 
</script>

<style>

</style>