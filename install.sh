#!/bin/bash

# Configuration
REPO="tawanamohammadi/template-gernator"
TEMPLATE_NAME="looka-dashboard"
INSTALL_DIR="/var/lib/marzban/templates"

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}>>> Looka VPN Dashboard Installer${NC}"

# Check if unzip is installed
if ! command -v unzip &> /dev/null; then
    echo -e "${BLUE}Installing unzip...${NC}"
    apt-get update && apt-get install -y unzip
fi

# Create templates directory if it doesn't exist
mkdir -p "$INSTALL_DIR/$TEMPLATE_NAME"

# Get the latest release download URL
echo -e "${BLUE}Fetching latest release from $REPO...${NC}"
API_URL="https://api.github.com/repos/$REPO/releases/latest"
RELEASE_DATA=$(curl -s "$API_URL")
LATEST_URL=$(echo "$RELEASE_DATA" | grep "browser_download_url" | cut -d '"' -f 4)

if [ -z "$LATEST_URL" ]; then
    echo -e "${RED}Error: Could not find latest release.${NC}"
    echo -e "Debug Info: Tried to fetch from $API_URL"
    # echo -e "Response: $RELEASE_DATA" # Uncomment for full debug
    exit 1
fi

echo -e "${BLUE}Downloading from: $LATEST_URL${NC}"

# Download and unzip
curl -L -o template.zip "$LATEST_URL"
unzip -o template.zip -d "$INSTALL_DIR/$TEMPLATE_NAME"
rm template.zip

echo -e "${GREEN}>>> Installation Complete!${NC}"
echo -e "Template installed at: ${GREEN}$INSTALL_DIR/$TEMPLATE_NAME${NC}"
echo -e "To use it, set ${GREEN}CUSTOM_TEMPLATES_DIRECTORY${NC} in your Marzban .env or settings."
