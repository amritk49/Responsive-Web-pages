function toggleMenu()
{
    const toggleMenu = document.querySelector('.toggleMenu');
    toggleMenu.classList.toggle('active');
    const navigation = document.querySelector('.navigation');
    navigation.classList.toggle('active');
}