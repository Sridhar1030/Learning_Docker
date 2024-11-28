# Step 1: Use official Node.js image as base
FROM node:18

# Step 2: Set the working directory
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (or yarn.lock)
COPY package.json package-lock.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy all files in the app
COPY . .

# Step 6: Expose port 5173 (default port for Vite)
EXPOSE 5173

# Step 7: Start the Vite development server
CMD ["npm", "run", "dev"]
