# Automatically prune all images and down all containers then starts to build and up new container
echo "📦  STARTED TO PACK THINGS UP"
echo "🛬  Down existing container"
sudo docker-compose down
echo "🗑  Prune all data"
sudo docker system prune -af
echo "🐳  Build and up container"
sudo docker-compose up --build -d
